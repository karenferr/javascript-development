// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  var marca = 'Fiat';
  var portas = 4;
} 
console.log(cor, marca, portas); // O código retornará erro ao tentar acessar marca e portas fora do seu escopo de bloco, uma vez que foram declaradas com const e let

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6); // const dois > var/let dois 

// O que fazer para total retornar 500?
var numero = 50;

for(var io = 0; i < 10; i++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

