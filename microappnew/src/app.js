import "@webcomponents/custom-elements"
import React, { Component } from 'react';
import { render } from 'react-dom';
class App extends Component {
    state = {
        value: 'myvalue'
    };
    componentDidMount() {
    }
    clicked() {
        window.dispatchEvent(new CustomEvent('click', {detail: e}));
    }
    render() {
        return (
            <div>
                 <button onClick={this.clicked} >OK</button>
            </div>
        )
    }
}
window.customElements.define('simple-elem', class ReactApp extends HTMLElement {
    static get observedAttributes() {
        return ['error-mode', 'title'];
    }

    getTitle() {
        return this.getAttribute('title');
    }

    produceError(e) {
        this.dispatchEvent(new CustomEvent('error', {detail: e}));
    }

    constructor() {
        super();
        console.log('ReactApp constructor', this);
    }

    connectedCallback() {
        render(<App title="hello" greeting="world"/>, this);
        this.addEventListener("click",function(e) {
            alert("clicked");
        });
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
    }
});


