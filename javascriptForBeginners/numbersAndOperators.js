// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total)
// Crie duas expressões que retornem NaN
var x = '30';
var y = '2kg';
var expressao = x / y;
console.log(expressao);
var d = '50';
var e = 'tres';
var multiplica = d * e;
console.log(multiplica);
console.log(isNaN(x));
console.log(isNaN(y));
// Somar a string '200' com o número 50 e retornar 250
var a = '200';
var b = 50;
var ab = +a + b;
console.log(ab)
// Incremente o número 5 e retorne o seu valor incrementado
var num = 5;
++num;
console.log(num)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// RESPOSTA:
var numero = '80';
var unidade = 'kg';
var pesoPorDois = +numero / 2 + unidade;
console.log(pesoPorDois)
