export class View {
    constructor(seletor, escapar) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
        }
        else {
            throw Error(`Elemento ${seletor} não encontrado no DOM`);
        }
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
