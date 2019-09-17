# Workflow
## Setup:
1. First install Polymer CLI `npm i -g polymer-cli`
2. Create a `index.html` file
3. Create a `index.js` file
4. Insert a `<script>` tag inside the `<head>` tag to link the `index.js` file **(add type="module")**
`<script type="module" src="index.js"></script>`
5. Run the dev server: `polymer serve`

## Write Code (index.js):
- Install litElement from npm: `npm i lit-element`
- Import neccessary functions from lit-html
`import { LitElement, html } from 'lit-element';";`
- Create a new class and extends the LitElement base class

    class customElement extends LitElement {
        // implement 'render' to define a template
        render() {
            // return a lit-html 'TemplateResult'
            return html`<p>This is a custom litElement</p>`;
        }
    }
    
- Register the new element with the browser:
    customElements.define('custom-element', customElement);
