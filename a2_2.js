var cel, fah, rs, cv
rs = require("readline-sync")
console.log("Conversor de Unidade de Medicao de Temperatura")
console.log("Digite 1 p/ Celsius -> Fahrenheit ou 2 p/ Fahrenheit -> Celsius ")
cv = rs.questionInt(" 1 Ou 2 ;  ")
if (cv == 1) {
    fah = rs.questionFloat("Digite a temperatura em Celsius :")
   fah = (fah*1.8)+32;

   console.log("Temperatura em F",fah)


    
} else {
    cel = rs.questionFloat("Digite a temperatura em Fahrenheit :")
   cel = (cel-32)/1.8;

   console.log("Temperatura em C",cel)

}