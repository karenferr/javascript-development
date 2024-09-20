// nomeie 2 propriedades strings
var whatsapp = "ativo";
whatsapp.length; // Retorna o número de caracteres na string = 5
whatsapp.constructor; // Retorna a função construtora da string, que é String. 

// nomeie 5 métodos strings
var estudos = 'JavaScript Now';
estudos.toUpperCase();
estudos.toLowerCase();
estudos.repeat(2);
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn =  document.querySelector('.btn');
btn.id;
btn.innerHTML;
btn.outerHTML;
btn.addEventListener;
btn.appendChild;

// busque na web um objeto (método) capaz de interagir com o clipboard (parte do seu computador que lida com o CTRL + C e CTRL + V)
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");
   // Select the text field
   copyText.select();
    // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}