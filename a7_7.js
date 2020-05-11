var rs = require('readline-sync');
var palavra = rs.question('Digite uma palavra : ');
var TamanhoDaPalavra = palavra.split("")
var n1 = 0
var n2 = 0
var vogal = ['A', 'E', 'I', 'O', 'U'];


for(var i = 0; i <TamanhoDaPalavra.length ;i++){
    if ( vogal.includes(TamanhoDaPalavra[i])){

n1++
   
    }
    

   else { n2++}
}

console.log('Numero de vogais e '+n1)
console.log('Numero de consoantes e '+n2)
