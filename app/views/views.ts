export abstract class View<T> {
    protected _elemento: HTMLElement;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    public update(model: T): void {
        this._elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;
}