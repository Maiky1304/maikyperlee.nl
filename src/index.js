import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "./hooks/ThemeProvider";
import { DrawerProvider } from "./hooks/DrawerProvider";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
