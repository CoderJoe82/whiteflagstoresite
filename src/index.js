import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BreakpointProvider } from "react-socks";

ReactDOM.render(
  <BreakpointProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BreakpointProvider>,
  document.getElementById("root")
);
