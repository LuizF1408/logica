var nome 
var rs  = require('readline-sync')
nome = rs.question('Digite uma palavra : ')
if (nome.includes("mp") || nome.includes("mb")){

console.log("A palavra esta certa")
}
else{
    console.log("Palavra esta errada")
}