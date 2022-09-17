// index.js파일이 가장 먼저 실행되는 파일이다.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // .js는 생략하는게 맞다.(다른 확장자하면 적는게 맞음)
import "./index.css";
// ./는 파일이 있는 같은 폴더를 확인하라는 의미

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
