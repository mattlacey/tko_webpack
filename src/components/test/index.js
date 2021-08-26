import ko from "tko";
import html from "./template.html";

import state from "App/state";

class Test extends ko.Component {
    constructor() {
        super();
        this.global = state.globalMessage;
        this.message = ko.observable("Hello, World");
    }

    static get template() {
        return html;
    }
}

Test.register("test-component");
