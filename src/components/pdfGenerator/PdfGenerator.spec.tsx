import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import PdfGenerator from './PdfGenerator';

describe('PdfGenerator', () => {
  let originalWindowOpen: typeof window.open;

  beforeAll(() => {
    // Mock window.open
    originalWindowOpen = window.open;
    window.open = jest.fn().mockReturnValue({ document: { write: jest.fn() } });

    Object.defineProperty(document, 'styleSheets', {
      value: [{ cssRules: [{ cssText: 'body { font-family: Arial; }' }] }],
    });
  });

  afterAll(() => {
    // Restore original implementations
    window.open = originalWindowOpen;
  });

  test('printResume function opens a new window and writes HTML content', () => {
    const { getByText } = render(<PdfGenerator />);
    const printButton = getByText('Download your Resume'); // Assuming there's a button with this text

    fireEvent.click(printButton);

    expect(window.open).toHaveBeenCalledWith('', '_blank');
    const printWindow = (window.open as jest.Mock).mock.results[0].value;
    expect(printWindow.document.write).toHaveBeenCalledWith(
      '<html><style>body { font-family: Arial; }</style><body>'
    );
  });

  test('printResume function returns early if elementToPrint contains JavaScript', () => {
    document.body.innerHTML = `
      <div id="resume">
        <script>alert('This is a test');</script>
      </div>
    `;

    const { getByText } = render(<PdfGenerator />);
    const printButton = getByText('Download your Resume');

    fireEvent.click(printButton);

    expect(window.open).not.toHaveBeenCalled();
  });
});
