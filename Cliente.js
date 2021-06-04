//criação de classe para evitar a repetição dos dados - molde que define oq quero ter
export class Cliente {
  //propriedades da classe Cliente
  nome;
  _cpf;

  get cpf(){
      return this._cpf;

  }

  constructor(nome, cpf){
      this.nome = nome;
      this._cpf = cpf;
  }
}
