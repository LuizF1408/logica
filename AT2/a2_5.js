var kw,total,rs;
rs = require("readline-sync");
kw = rs.questionFloat("Digite qauntos KW foram consumidos em sua residencia:  ");
total =1.4928 * kw;
console.log("O valor da fatura é de R$: "+(total.toFixed(2)));
var desc = 0.10;
total = total-(desc*total);
console.log("O novo valor da fatura com desconto e R$: "+(total.toFixed(2))); 
