class Bijection extends HTMLElement {
    constructor() {
        super();

        const _style = document.createElement("style");
        const _template = document.createElement("template");

        _style.innerHTML = `
        h1 {
          color: #ccc;
          font-family: sans-serif;
        }

        .blueish {
            color: #09f;
        }
        `;

        _template.innerHTML = `
        <h1>
          <span class="blueish">Bijection</span> is a function that maps one set of values to another.
        </h1>
      `;

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }
}
customElements.define("bijection-element", Bijection);
