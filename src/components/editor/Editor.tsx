import { cssLanguage } from '@codemirror/lang-css';
import { htmlLanguage } from '@codemirror/lang-html';
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
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="HTML" />
        <Tab label="CSS" />
      </Tabs>

      {value === 0 && (
        <CodeMirror
          value={html}
          extensions={[htmlLanguage]}
          onChange={setHtml}
        />
      )}
      {value === 1 && (
        <CodeMirror value={css} extensions={[cssLanguage]} onChange={setCss} />
      )}
    </>
  );
}
