// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito caso o cliente possua carro e casa e false caso o contrário.
var possuiCarro = false;
var possuiCasa = false;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito' : 'Negar crédito';

