var rs = require('readline-sync')
var vogais = ['A','E','I','U','O']
var palavra
var fim = []
palavra = rs.question('Digite uma palavra : ');
palavra = palavra.toUpperCase()

for( i=0 ;i < palavra.length; i++){
if(!vogais.includes(palavra[i]) ){
fim.push(palavra[i])
}

 


}
console.log(fim.join())