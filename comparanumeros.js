var  num1, num2
var rs = require("readline-sync")

num1 = rs.question("Qual e o primeiro numero ? ");
num2 = rs.question("Qual e o segundo numero ? ")

console.log("O primeiro numero digitado e : " +num1)
console.log("O segundo numero e : " +num2)

if (num1>num2) {console.log("O numero "+num1+" e maior que "+num2)
    
}
 else if ( num1<num2)  {console.log("O numero "+num2+" e maior que "+num1) 
 }


else
  { console.log( "Os numeros sao iguais")
}
console.log("Acabou o codigo")