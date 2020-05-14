var palavra,DC
var temp = 0
var cifra = []
const cesar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C']
var rs = require('readline-sync')

palavra = rs.question('Digite uma palavra : ')
palavra = palavra.toUpperCase()
DC = rs.questionInt('Digite 1 paran cifrar, Digite 2 para decifrar : ')

if(DC === 1){
for(i = 0;i < palavra.length;i++){
 temp = cesar.indexOf(palavra[i])
cifra.push(cesar[temp+3])

}
console.log(cifra.join(""))
} else{DC === 2

for(i = 0;i < palavra.length;i++){
    temp = cesar.indexOf(palavra[i],3)
   cifra.push(cesar[temp-3])
   
   }
   console.log(cifra.join(""))
}