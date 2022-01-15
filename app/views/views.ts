export abstract class View<T> {
    protected _elemento: HTMLElement;
    private _escapar: boolean;

    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this._elemento = elemento as HTMLElement;
        } else {
            throw Error(`Elemento ${seletor} não encontrado no DOM`);
        }
        
        this._escapar = escapar ? escapar : false;
    }

    public update(model: T): void {
        let template = this.template(model);
        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}