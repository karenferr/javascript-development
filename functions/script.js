// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor) {
  if (valor){
    return "é Truthy."
  }
  else {
    return "é Falsy.";
  }
}
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(5));
// Crie uma função que retorne o seu nome completo com os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
console.log(nomeCompleto("Karen", "Ferreira"));

// Crie uma função que verifica se um número é par
function numeroPar(valor) {
  var ehPar = valor % 2 == 0;
  if (ehPar) {
    return "É par.";
  } else {
    return "Não é par.";
  }
}
console.log(numeroPar(4));
console.log(numeroPar(5));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(valor) {
  return typeof valor;
}
console.log(tipoDado(5));
// addEventListener é uma função nativa do JS o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Karen");
}); // criar ouvinte de evento - qnd rolar pagina - execute a funcao - imprimir karen no console

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return "Ainda faltam " + (totalPaises - paisesVisitados) + " países para visitar";
}
function jaVisitei(paisesVisitados) {
  return "Já visitei " + paisesVisitados + " do total de " + totalPaises + " países.";
}

precisoVisitar(20);
jaVisitei(10);
