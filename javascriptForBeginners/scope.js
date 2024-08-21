// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}
 // var é o tipo de variavel e const e let nao existe fora do loop > colocar console.log dentro do bloco e renomear var para cor no console.log();

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
//
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
