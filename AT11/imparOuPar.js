const isOdd = require('is-odd')
const rs = require('readline-sync')
var p = rs.questionInt('Digite um numero: ')
if (p == true){
    console.log(`O numero ${p} e impar`)
}
else {
    console.log(`O numero ${p} e par`)
}