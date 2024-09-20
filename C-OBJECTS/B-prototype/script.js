// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const andre = new Pessoa("André", "Rafael", 28);

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype); // forEach(), length()...
Object.getOwnPropertyNames(HTMLCollection.prototype); // item(), length...
Object.getOwnPropertyNames(Document.prototype); // getElementById(), getElementsByClassName(),getElementsByTagName(), querySelector(), querySelectorAll()

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");
//li.dado.constructor
li; // HTMLLIELEMENT
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
