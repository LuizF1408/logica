var rs = require("readline-sync");
var palavra = rs.question("Insira uma palavra:  ".split('').reverse().join(''));
var tamanho = palavra.length;
for(var i = 0;i < tamanho; i++){
var letra = palavra.charAt(i);
console.log(letra);

}
