import React from "react";
import ReactDOM from "react-dom"; // <--- важно
import { Main } from "./Main";

export class App {
    constructor() {
        this.render();
    }

    private render(): void {
        const rootElement = document.getElementById("app") || document.createElement("div");
        ReactDOM.render(React.createElement(Main, { app: this }, null), rootElement);
    }
}

new App();
