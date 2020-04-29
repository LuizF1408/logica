var rs = require("readline-sync");
var texto = rs.question("Digite um texto :  ");
var letra =texto.charAt(0);
if (letra == letra.toUpperCase()){
    console.log("A primeira letra e maiuscola");
}
else {
    console.log("A primeira letra e minuscola");
}