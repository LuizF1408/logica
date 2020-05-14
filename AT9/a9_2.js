var rs = require('readline-sync')
function recebeN (rs){
n = rs.questionInt('Digite um numero : ')
return n
}
function ePrimo (n){
var primo = n%2
if(primo == 0){
    console.log('E par')
}else{
    console.log('E primo')
}
}
var n = recebeN(rs);
var primo =ePrimo(n)