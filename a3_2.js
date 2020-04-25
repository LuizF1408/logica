var rs, n1, n2, res
rs = require("readline-sync")
n1 = rs.questionInt("Digite um N:  ")
n2 = rs.questionInt("Digite outro N:  ")
res = 0

while (n1 > 0) {
    res = n2+res
    n1 = n1-1
    
    
}
console.log(res)
