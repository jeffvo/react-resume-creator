import he from 'he';
import './Resume.css';

interface ResumeProps {
  html: string;
  css: string;
}

export default function Resume({ html, css }: ResumeProps) {
  const decodedHtml = he.decode(html);
  return (
    <div className="resumeWindow">
      <style>{css}</style>
      <div id="resume" dangerouslySetInnerHTML={{ __html: decodedHtml }} />
    </div>
  );
}
