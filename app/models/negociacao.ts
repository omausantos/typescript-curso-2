export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ){}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        return new Date(this._data);
    }

    public static criarDe(dataString: string, quantidadeString: string, valorString: string) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}