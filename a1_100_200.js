var rs,n
rs = require("readline-sync")
 n = rs.questionInt("Digite um numero")
if ((n >= 100) && (n <= 200)) {
    (console.log("O numero que voce digitou esta entre 100 e 200 "))
    
} else {console.log("Voce digitou um numero fora de 100 e 200 ")
    
}