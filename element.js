// import the neccessary functions
import { LitElement, html } from 'lit-element';

// create a new class and extends the LitElement base class
class customElement extends LitElement {
    // implement 'render' to define a template
    render() {
        // return a lit-html 'TemplateResult'
        return html`<p>This is a custom litElement</p>`;
    }
}

// register the new element with the browser
customElements.define('custom-element', customElement);