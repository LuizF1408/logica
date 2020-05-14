var rs = require('readline-sync')
var n1,n2
n1 = rs.questionInt('Digite um Numero: ')
n2 = rs.questionInt('Digite Outro Numero: ')

function maiorOuMenor(n1,n2){
    if(n1 > n2){
        console.log('O '+n1+' e maior')
    }
    else{
        console.log('O '+n2+' e maior')
    }

}
var maiorOuMenor = maiorOuMenor(n1,n2)