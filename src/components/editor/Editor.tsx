import { cssLanguage } from '@codemirror/lang-css';
import { htmlLanguage } from '@codemirror/lang-html';
import styled from '@emotion/styled';
import { Tab, Tabs } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { cssTemplate } from '../templates/css';
import { htmlTemplate } from '../templates/html';

interface Props {
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  html: string;
  css: string;
  setCss: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({ setHtml, html, css, setCss }: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setCss(cssTemplate);
    setHtml(htmlTemplate);
  }, [setCss, setHtml]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledDiv>
      <Tabs
        style={{ backgroundColor: '#292c34', color: '#ffffff' }}
        value={value}
        onChange={handleChange}
      >
        <Tab style={{ color: '#ffffff' }} label="HTML" />
        <Tab style={{ color: '#ffffff' }} label="CSS" />
      </Tabs>

      {value === 0 && (
        <CodeMirror
          value={html}
          theme="dark"
          extensions={[htmlLanguage]}
          onChange={setHtml}
        />
      )}
      {value === 1 && (
        <CodeMirror
          theme="dark"
          value={css}
          extensions={[cssLanguage]}
          onChange={setCss}
        />
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  flex-grow: 1;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  line-height: 1.5;
  overflow: auto;
  flex-grow: 1;
  max-height: 297mm;
`;
