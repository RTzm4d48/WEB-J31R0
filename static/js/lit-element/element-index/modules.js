import { LitElement, css, html } from '/static/js/lit-element/lit.js';

class Elon_Musk extends LitElement {
    static get properties(){
        return{
            item_label: {type: String},
        };
    }
    createRenderRoot() {
      return this;
    }
    constructor(){
        super();
        this.item_label = '';
    }
  render() {

    
    return html`
        <label>${this.item_label}</label>
    `;
  }
  };
  customElements.define('elon-musk', Elon_Musk);



var wind_wid = window.innerWidth;
var wind_hei = window.innerHeight;

var width_module = (wind_wid / 21);
var height_module = (wind_hei / 12);

var width_rounded = width_module.toFixed(0);

for (let i = 0; i < 12; i++) {

    for (let a = 0; a < 21; a++) {
        document.getElementById("cont_modules").innerHTML += `
        <div style="background: salmon; width: ${width_rounded}px; height: ${width_rounded}px">${width_rounded}</div>
        `;
        if (a == 20) {
            document.getElementById("cont_modules").innerHTML += `
            <br>aa
            `;
        }
    }

    // document.getElementById("cont_modules").innerHTML += `
    // <div style="background: salmon; width: ${width_rounded}px; height: ${width_rounded}px">${width_rounded}</div>
    // `;
}

// 1920 * 1080