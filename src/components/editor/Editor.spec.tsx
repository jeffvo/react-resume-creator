import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { cssTemplate } from '../templates/css';
import { htmlTemplate } from '../templates/html';
import Editor from './Editor';

describe('Editor', () => {
  let setHtml: jest.Mock;
  let setCss: jest.Mock;

  beforeEach(() => {
    setHtml = jest.fn();
    setCss = jest.fn();
  });

  test('renders correctly with initial values', () => {
    const { getByText } = render(
      <Editor setHtml={setHtml} html="" css="" setCss={setCss} />
    );

    expect(getByText('HTML')).toBeInTheDocument();
    expect(getByText('CSS')).toBeInTheDocument();
  });

  test('initializes with templates', () => {
    render(<Editor setHtml={setHtml} html="" css="" setCss={setCss} />);

    expect(setCss).toHaveBeenCalledWith(cssTemplate);
    expect(setHtml).toHaveBeenCalledWith(htmlTemplate);
  });

  test('switches tabs correctly', () => {
    const { getByText, getByRole } = render(
      <Editor setHtml={setHtml} html="" css="" setCss={setCss} />
    );

    const cssTab = getByText('CSS');
    fireEvent.click(cssTab);

    expect(getByRole('tab', { selected: true })).toHaveTextContent('CSS');
  });

  test('updates CodeMirror value correctly', () => {
    const { getByText, container } = render(
      <Editor
        setHtml={setHtml}
        html="<p>Hello</p>"
        css="body { margin: 0; }"
        setCss={setCss}
      />
    );

    const htmlTab = getByText('HTML');
    fireEvent.click(htmlTab);

    const codeMirror = container.querySelector('.cm-content');
    expect(codeMirror).toHaveTextContent('<p>Hello</p>');
  });
});
