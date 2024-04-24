import { LitElement, css, html } from '/static/js/lit-element/lit.js';

// CLASE BASE DE TODOS LOS ICONOS
export class BaseElement extends LitElement {
    static get properties() {
      return {
        item_size: { type: String },
      };
    }
  
    constructor() {
      super();
      this.item_size = '';
    }
  
    static get styles() {
      return css`
        .my_icon {
          display: flex;
        }
      `;
    }
  }