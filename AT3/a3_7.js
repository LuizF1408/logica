var decisao1, rs, n1, n2, decisao2;

rs = require("readline-sync");

console.log("Digite A para encerrar o programa");
console.log("Digite B para continuar");
decisao1 = rs.question(":  ");

while ((decisao1 != "A") && (decisao1 != "B")){
console.log("Comando invalido Digite A ou B");
decisao1 = rs.question(":  ");
}
if ( decisao1 === "B") {
   
       


while (decisao2 != "NAO") {

    if (decisao1 == "B") {

        n1 = rs.questionInt("Digite um numero para realizar a soma:  ")
        n2 = rs.questionInt("Digite outro numero para realizar a soma:  ")
        n1 = n1 + n2
        console.log("O resultado da soma e: ",n1)
        decisao2 = rs.question("Para realizar outra operacao digite SIM para cancelar digite NAO :  ")
    }
}
}
if (decisao1 == "A") {
    console.log("Programa encerrador");
}
