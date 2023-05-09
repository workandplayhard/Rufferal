import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
} from "react-router-dom";
//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
        crossOrigin="anonymous"
      ></script>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
);
