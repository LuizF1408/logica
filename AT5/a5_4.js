var rs = require("readline-sync");
var nome = rs.question("Digite o nome do aluno(a):  ");
var a,b;
a = rs.questionFloat("Digite a primeira nota do aluno:  ");
b = rs.questionFloat("Digite a segunda nota do aluno(a):  ");
var media = ((a+(0.30*a))+(b+(b*0.70)));
console.log("O aluno(a) "+nome+" tem uma media de : "+media)