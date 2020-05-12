var sal, empre, parc, rs, porcem;

rs = require("readline-sync");
console.log("Para solicitar o emprestimo, informe alguns dados ");
sal = rs.questionFloat("Digite o valor do seu salario :  ");
empre = rs.questionFloat("Digite o valor que deseja solicitar para o emprestimo :  ");
parc = rs.questionFloat("Digite o quantidade de parcelas :  ");

if ((sal <= 1) && (empre <= 1) && (parc <= 1)) {
    console.log("Valores digitados sao invalidos")

}

else if (empre > porcem) {
    console.log("Nao sera possivel realizar o emprestimo")
} 

else { 
    porcem = sal * 0.30;
    empre = empre / parc; 
    console.log("Emprestimo foi realizado com sucesso ")


}