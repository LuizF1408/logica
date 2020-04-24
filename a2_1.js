var p, r1, c50, c25, c10, c5, c1, rs, total;

rs = require("readline-sync")
p = rs.questionFloat("Digite o valor do produto  ")
r1 = rs.questionFloat("Digite o nº de moedas de 1 Real  ")
c50 = rs.questionFloat("Digite o nº de moedas de 0,50 centavos ")
c25 = rs.questionFloat("Digite o nº de moedas de 0,25 centavos  ")
c10 = rs.questionFloat("Digite o nº de moedas de 0,10 centavos ")
c5 = rs.questionlFoat("Digite o nº de moedas de 0,5 centavos  ")
c1 = rs.questionFloat("Digite o nº de moedas de 0,1 centavo ")
total = r1 + c50 + c25 + c10 + c5 + c1
console.log(total)