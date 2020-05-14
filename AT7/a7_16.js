var palavra 
var rs = require('readline-sync')
palavra = rs.question('Digite uma palavra : ')
if (palavra.startsWith("Google")){

    console.log('Palavra Valida')
}else {
    console.log('Palavra invalida')
}