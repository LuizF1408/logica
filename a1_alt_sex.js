var result,quest,peso,n1,n2
quest = require("readline-sync")
result = quest.question("Digite o numero comforme seu SEXO : 1= Feminino 2= Masculino ")
peso = quest.question("Digite sua Altura ")
if (result == 1){
(n1 = 62.1 * peso)

 console.log("Seu peso ideal e : "+n1)
    
}
if (result == 2){
n2 = ( peso *72.7)
console.log("Seu peso ideal e :" +n2)
}