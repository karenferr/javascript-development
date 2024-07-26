// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 10;
if (idade > 24) {
  console.log("É maior");
} else if (idade < 24) {
  console.log("É menor");
} else {
  console.log("É igual");
}
// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
// RESPOSTA: 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // T
var idade = 28; // T
var possuiDoutorado = false; // F
var empregoFuturo; // F
var dinheiroNaConta = 0; // F

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var quantidade = china > brasil;
console.log(quantidade);
// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} // resposta: FALSO

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
} // RESPOSTA: Cão
