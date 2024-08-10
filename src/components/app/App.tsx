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
      <div className="content">
        <div className="myEditor">
          <Editor setHtml={setHtml} html={html} css={css} setCss={setCss} />
        </div>
        <Resume html={html} css={css} />
      </div>
    </div>
  );
}
