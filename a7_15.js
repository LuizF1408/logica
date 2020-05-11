var rs = require('readline-sync')

var palavra
var fim = []
palavra = rs.question('Digite uma palavra : ');
for( i=0 ;i < palavra.length; i++){
if(!palavra[i].includes('A')){
fim.push(palavra[i])
}

 


}
console.log(fim)