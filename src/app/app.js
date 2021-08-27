import ko from "tko";

import html from "./app.html";
import state from "./state";

import "Css/style.css";

import test from "Components/test";

class App extends ko.Component {
    message = ko.observable();
    count = 0;
    globalMessage = state.globalMessage;

    constructor() {
        super();

        setInterval(() => {
            this.message(this.count++);
        }, 1000);
    }

    static get template() {
        return html;
    }
}

function init() {
    App.register("main-app");

    let app = document.createElement("main-app");
    document.body.appendChild(app);

    ko.applyBindings(new App(), document.body);
}

init();
