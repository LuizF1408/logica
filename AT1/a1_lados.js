var lados
var rs,med,med1,res
rs = require("readline-sync");
lados = rs.question("Digite o numero de lados ");
//Triangulo
if (lados == 3){
    med = rs.question("Qual e a medida da base em (CM) ? ");
    med1 = rs.question("Qual e a altura em (CM) ? ");
    res =(med*med1) / 2


console.log("E um triangulo e a area mede :"+res+" cm");

//Quadrado
}else if(lados == 4) {
    med = rs.question("Qual e a medida da base em (CM) ? ");
    med1 = rs.question("Qual e a altura em (CM) ? ");
    res = (med*med1)

console.log("E um quadrado e a area mede :"+res+" cm²");
     
 } else {
     console.log("E um pentagono")
 }
