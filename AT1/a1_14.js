var n1,n2,res,rs
rs = require("readline-sync")
n1 = rs.questionInt("N1 :  ")
n2 = rs.questionInt("N2 :  ")
res = n1/n2
if (res = 0) {
    console.log("O numero "+n1+" e divisivel por "+n2)
    
}
else {
    console.log("O numero "+n1+" nao e divisivel por "+n2)
}