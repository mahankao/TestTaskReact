import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";

const rootElement = document.getElementById("app");

if (rootElement) {
    ReactDOM.render({Main}, rootElement);
} else {
    console.error("No #app element found in index.html");
}
