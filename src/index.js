import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/App/TodoList";
import TodoHeader from "./components/Header/TodoHeader";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoHeader />
    <TodoList />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
