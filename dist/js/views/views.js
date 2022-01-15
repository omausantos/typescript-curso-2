export class View {
    constructor(seletor, escapar) {
        this._elemento = document.querySelector(seletor);
        this._escapar = escapar ? escapar : false;
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}
