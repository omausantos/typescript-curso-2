export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        return new Date(this._data);
    }
    static criarDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
