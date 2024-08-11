import styled from '@emotion/styled';
import he from 'he';
import './Resume.css';

interface ResumeProps {
  html: string;
  css: string;
}

export default function Resume({ html, css }: ResumeProps) {
  const decodedHtml = he.decode(html);
  return (
    <StyledResumeWindow className="resumeWindow">
      <style>{css}</style>
      <StyledResume
        id="resume"
        dangerouslySetInnerHTML={{ __html: decodedHtml }}
      />
    </StyledResumeWindow>
  );
}

const StyledResumeWindow = styled.div`
  min-width: 245mm;
`;

const StyledResume = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: #000000 1px solid;
  overflow: hidden;
  max-height: 297mm;
  height: 297mm;
`;
