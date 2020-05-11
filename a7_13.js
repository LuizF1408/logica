var nome
const str = "ANTILOPE"
var rs  = require('readline-sync')
nome =  rs.question('Digite uma palavra : ')
var nome2 = nome.toUpperCase()

const newStr = nome2.replace (str, "Kobus ellipsiprymnus" )
console.log(nome2.replace(str,'Kobus ellipsiprymnus'))