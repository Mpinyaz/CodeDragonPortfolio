import "./index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
