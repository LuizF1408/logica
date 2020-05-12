var nome,sexo,civil,rs,t


rs = require("readline-sync")
nome = rs.question("Digite seu nome  ")
sexo = rs.question("Digite seu sexo ","F", "Para Feminino ","M"," Para Masculino  ")
civil = rs.question("Digite seu estado civil  ")
if ((sexo == "F") && (civil = "Casada")) {t = rs.question("Digite o tempo de Casado  ")
    
}