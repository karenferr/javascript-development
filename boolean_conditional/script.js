// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeKaren = 24;
var idadeLuisa = 22;
let idadeMaior = idadeKaren > idadeLuisa;
let idadeIgual = idadeKaren == idadeLuisa;
if (idadeMaior) {
  console.log("É maior");
  }
  else if (idadeIgual) {
    console.log("É igual");
} else {
    console.log("É menor");
  }

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // (3) && (5) && (3)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // T
var idade = 28; // T
var possuiDoutorado = false; // F
var empregoFuturo; // F
var dinheiroNaConta = 0; // F
console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta)
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil>china) {
  console.log('Brasil tem mais habitantes')
}
else {
  console.log('China tem mais habitantes')
  }


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // R: Cão