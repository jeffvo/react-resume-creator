import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
