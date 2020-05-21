var rs = require('readline-sync')

var n = 0

var res = 0
n = rs.questionInt('Digite um numero para saber se e perfeito: ')

function ehPerfeito(n) {
    for (var divisor = 1; divisor < n; divisor++) {

        if (n % divisor == 0) {
            res = res + divisor
         
           console.log(res)
           
        }
        
   
     }
     if (res == n){
         return true
     }
     else { return false}
}


var perfeito = ehPerfeito(n)

if (perfeito == true){
    console.log('O numero '+n+' e perfeito')
} 
else{
    console.log('O numero '+n+' nao e perfeito')
 }