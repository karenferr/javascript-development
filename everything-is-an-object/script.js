// nomeie 3 propriedades ou métodos de strings
var nome = "Karen";
var sobrenome = "Ferreira";
var signo = "cancer";
console.log(nome.fixed);
console.log(sobrenome.length);
console.log(signo.slice);
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.innerText;
btn.animate;
btn.id;
btn.appendChild;
btn.outerHTML;
// busque na web um objeto (método) capaz de interagir com o clipboard
// clipboard = parte do pc que lida com o CTRL + C e CTRL + V
function clipboard(){
  // seleciona o doc pelo seu id (entrada)
  var copiarTexto = document.getElementById("entrada"); 
  // seleciona o texto do elemento 
  copiarTexto.select(); 
  copiarTexto.setSelectionRange(0,99999); // texto ser todo selecionado em diversos dispositivos
  // copia o texto selecionado
  navigator.clipboard.writeText(copiarTexto.value);
}

