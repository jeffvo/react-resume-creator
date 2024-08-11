import styled from '@emotion/styled';
import { useState } from 'react';
import Editor from '../editor/Editor';
import Resume from '../resume/Resume';
import './App.css';
import Header from './Header';
import HomePage from './Home';

export default function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');

  return (
    <div className="app">
      <Header />
      <HomePage />
      <StyledContent id="Content">
        <Editor setHtml={setHtml} html={html} css={css} setCss={setCss} />
        <Resume html={html} css={css} />
      </StyledContent>
    </div>
  );
}

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
`;
