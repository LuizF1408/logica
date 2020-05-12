var nome 
var rs  = require('readline-sync')
nome = rs.question('Digite uma palavra : ')
if (nome.endsWith("al")){

console.log(nome)
}
else{
    console.log("Palavra nao identificada")
}