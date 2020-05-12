var nome
var rs  = require('readline-sync')
nome =  rs.question('Digite uma palavra : ')
var nome2 = nome.toUpperCase()
if (nome2.indexOf("A","E","I","O","U") === -1){

console.log("Nao existe vogais")
}
else{
    console.log("Existe vogais")
}