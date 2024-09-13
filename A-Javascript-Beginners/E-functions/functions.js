// Crie uma função para verificar se um valor é Truthy
function itsTruthy(valor) {
  !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetro(lado) {
  return lado * 4;
}
// Crie uma função que retorne o seu nome completo com os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " "+sobrenome;
}

// Crie uma função que verifica se um número é par
function ehPar(numero) {
if ((numero % 2) == 0) {
  return 'Par';
}
else {
  return 'Impar';
}
}


// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}

// addEventListener = função nativa do JavaScript
// primeiro parâmetro = evento que ocorre, segundo = Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function() {
  console.log('Karen Ferreira');
});
// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
console.log(precisoVisitar(20));  
console.log(jaVisitei(20));
