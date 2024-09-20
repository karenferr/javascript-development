// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }
function Pessoa(nome, idade) {
  this.nome = nome; // atributo nome != argumento nome
  this.idade = idade; // atributo idade != argumento idade

  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa("karen", 25);
const pessoa2 = new Pessoa("rafael", 24);
const pessoa3 = new Pessoa("bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom com as propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(selector) {
  // Selecionamos todos os elementos do DOM que correspondem ao seletor fornecido
  const elementList = document.querySelectorAll(selector);

  this.elements = elementList; // retorna NodeList com os elementos selecionados

  // Definimos um método chamado addClass, que adiciona uma classe a todos os elementos da NodeList
  this.addClass = function (classe) {
    // Usamos forEach para iterar sobre cada elemento da NodeList
    elementList.forEach((element) => {
      // Verificamos se o elemento é válido (não undefined ou null) e adicionamos a classe
      if (element) element.classList.add(classe);
    });
  };

  // Definimos um método chamado removeClass, que remove uma classe de todos os elementos da NodeList
  this.removeClass = function (classe) {
    // Usamos forEach para iterar sobre cada elemento da NodeList
    elementList.forEach((element) => {
      // Verificamos se o elemento é válido e removemos a classe
      if (element) element.classList.remove(classe);
    });
  };

  // Criamos uma instância da função Dom, selecionando todos os elementos 'li' (itens de lista)
  const listaItens = new Dom("li");

  // Criamos outra instância da função Dom, selecionando todos os elementos 'ul' (listas não ordenadas)
  const ul = new Dom("ul");
}
