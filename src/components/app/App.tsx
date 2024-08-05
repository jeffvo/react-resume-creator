import { useState } from "react";
import { Editor } from "../editor/Editor";
import { PdfGenerator } from "../pdfGenerator/pdfGenerator";
import Resume from "../resume/Resume";
import "./App.css";

export default function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  return (
    <div className="app">
      <div className="header">
        <PdfGenerator />
      </div>
      <div className="content">
        <div className="myEditor">
          <Editor setHtml={setHtml} html={html} css={css} setCss={setCss} />
        </div>
        <Resume html={html} css={css} />
      </div>
    </div>
  );
}
