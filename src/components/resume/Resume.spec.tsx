import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Resume from './Resume';

describe('Resume Component', () => {
  const css = `
    body {
      font-family: Arial, sans-serif;
    }
  `;

  test('renders correctly without JavaScript in HTML', () => {
    const html = '<div>Hello, world!</div>';
    render(<Resume html={html} css={css} />);

    const resumeElement = screen.getByText('Hello, world!');
    expect(resumeElement).toBeInTheDocument();
  });

  test('does not render HTML containing JavaScript', () => {
    const html = '<div onclick="alert(\'Hello\')">Click me</div>';
    render(<Resume html={html} css={css} />);

    const resumeElement = screen.queryByText('Click me');
    expect(resumeElement).not.toBeInTheDocument();
  });

  test('does not render HTML containing script tags', () => {
    const html = '<script>alert("Hello")</script>';
    render(<Resume html={html} css={css} />);

    const resumeElement = screen.queryByText('alert("Hello")');
    expect(resumeElement).not.toBeInTheDocument();
  });
});
