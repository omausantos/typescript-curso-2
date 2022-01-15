import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoes-veiw.js";

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView', false);

    constructor(){
        this._inputData = document.querySelector('#data') as HTMLInputElement;
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    public adiciona(): void {
        const negociacao = Negociacao.criarDe(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        )
        if(!this.ehDiaUtil(negociacao.data)) {
            this._mensagemView.update('Selecionar somente dias úteis para cadastro da negociação');
            return;
        } 
        this._negociacoes.adiciona(negociacao);
        this.atualizarView();
        this.limparFormulario();
        
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }

    private atualizarView(): void {        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}