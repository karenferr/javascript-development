// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados1 = {
  nome: 'Karen',
  sobrenome: 'Ferreira',
  idade: 25,
  cidade: 'Salvador'
}
var dados2 = {
  nome: 'Rafael',
  idade: 24,
}
var dados3 = {
  nome: 'Ane',
  idade: 44,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
dados1.nomeCompleto = function() {
  return this.nome + " "+ this.sobrenome;
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
  raca: 'labrador',
  idade: 10,
  cor: 'preto',

  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}

