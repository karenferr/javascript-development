// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Karen",
  sobrenome: "Ferreira",
  idade: "24",
  curso: "Engenharia de Software"
}

// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
  nome: "Karen",
  sobrenome: "Ferreira",
  idade: "24",
  curso: "Engenharia de Software",
  nomeCompleto() {
    console.log(this.nome + " " + this.sobrenome);
  }
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
  raça: "labrador",
  cor: "preto",
  idade: 10,
  viuHomem: false,
  verHomem() {
    if (this.viuHomem) {
      return "Latir";
    }
    else {
      return "Não latir"
    }
  }
}
