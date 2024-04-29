import { LitElement, css, html } from '/static/js/lit-element/lit.js';
import { screen_modules_size } from '/static/js/screen_size.js';

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
    insert_inModule(id) {
        if (id == '2_10') {
            return `<nav>
            <p>${id}</p>
            </nav>`;
        }else {
            return '';
        }
    }
    write_column(y, x) {
        var html_aside = `<aside id="cont_modules">`;

        var width = screen_modules_size()[1];

        for (let i = 0; i <= x; i++) {
            html_aside = html_aside+`<div class="module_box" style="width: ${width}px; height: ${width}px" id="${y}_${i}">
                ${this.insert_inModule(y+'_'+i)}
                <div class="atom_modulesPoint">
                    <span>
                        <div><section></section></div>
                        <div><section></section></div>
                        <div><section></section></div>
                    </span>
                    <span>
                        <div><section></section></div>
                        <div><section></section></div>
                        <div><section></section></div>
                    </span>
                    <span>
                        <div><section></section></div>
                        <div><section></section></div>
                        <div><section></section></div>
                    </span>
                </div>
            </div>`;
            var thehtmla = i == x ? html_aside+"</aside>" : i;
        }
        return thehtmla;
    }
    NEW_MODULES_Y(y, x) {
        if (x > y) {
            var html_aside = `<aside>`;

            var width = screen_modules_size()[1];

            for (let i = 0; i <= x; i++) {
                html_aside = html_aside+`<div class="module_box" style="background: salmon; width: ${width}px; height: ${width}px">
                </div>`;
                var thehtmla = i == x ? html_aside+"</aside>" : i;
            }
            return thehtmla;
        }else {
            return '<p></p>';
        }
    }

    renderHTML(htmlString) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        return template.content.cloneNode(true);
    }

    render() {
        for (let i = 0; i < 10; i++) {
            var modules = modules != null ? modules+this.write_column(i, 21) : this.write_column(i, 21);
        }
        var modulesDOM = this.renderHTML(modules);
        
        var modules_complementes = '';
        var newModule_Y_rounded = screen_modules_size()[0];
        for (let i = 0; i < newModule_Y_rounded; i++) {
            modules_complementes = modules_complementes != '' ? modules_complementes+this.NEW_MODULES_Y(i, 21): this.NEW_MODULES_Y(i, 21);
        }
        var modules_complementesDOM = this.renderHTML(modules_complementes);
        var modules_complementesDOM2 = this.renderHTML(modules_complementes);

        return html`
            ${modules_complementesDOM}
            ${modulesDOM}
            ${modules_complementesDOM2}
        `;
    }
    };
    customElements.define('elon-musk', Elon_Musk);





// 1920 * 1080