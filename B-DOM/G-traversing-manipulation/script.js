// Duplique o menu e adicione ele em copy
const menuNovo = document.querySelector('.menu');

const cloneMenu = menuNovo.cloneNode(true);

const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const firstDt = faq.querySelector('dt');
// console.log(firstDt);

// Selecione o DD referente ao primeiro DT
const proximoDD = firstDt.nextElementSibling;
// console.log(proximoDD);
// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
