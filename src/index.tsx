import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./app";

const root = document.getElementById("root");
const ReactDOM = root && ReactDOMClient.createRoot(root);

ReactDOM.render(<App />);
