import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import PdfGenerator from './pdfGenerator';

describe('PdfGenerator', () => {
  let originalWindowOpen: typeof window.open;

  beforeAll(() => {
    window.open = jest.fn().mockReturnValue({ document: { write: jest.fn() } });
  });

  afterAll(() => {
    window.open = originalWindowOpen;
  });

  it('renders the Download your Resume button', () => {
    render(<PdfGenerator />);
    expect(screen.getByText('Download your Resume')).toBeInTheDocument();
  });

  it('does not call printResume if the resume element is not found', () => {
    render(<PdfGenerator />);
    const button = screen.getByText('Download your Resume');
    fireEvent.click(button);

    expect(window.open).not.toHaveBeenCalled();
  });

  it('does not call printResume if the resume element contains JavaScript', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'resume';
    mockElement.innerHTML = '<script>alert("test")</script>';
    document.body.appendChild(mockElement);

    render(<PdfGenerator />);
    const button = screen.getByText('Download your Resume');
    fireEvent.click(button);

    expect(window.open).not.toHaveBeenCalled();

    document.body.removeChild(mockElement);
  });
});
