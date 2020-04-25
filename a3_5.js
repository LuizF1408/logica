var p,n,rs,calc
rs = require("readline-sync")
console.log("Para comecar digite a quanto o numero seguinte sera elevado")
p = rs.questionInt(":  ")
console.log("Agora digite o numero que deseja elevar")
n = rs.questionInt(":  ")
calc = n ** p
console.log("O valor elevado resultou em :",calc)