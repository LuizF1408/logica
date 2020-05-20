var rs = require('readline-sync')

var menor = 200
 var maior = 0
while (true) {
    var n = rs.questionInt('Manda numero: ')
    if (n == -1) {
        break
    }
   
    if (n < 0) {
        var ig = n
    }
     if (n > maior) {
        maior = n
        

    }
    if (n < menor ){
 
        menor = n
        
    }
}
console.log(`O numero maior é ${maior} e o menor é ${menor}`)