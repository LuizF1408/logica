var lado,lado1,lado2,rs,soma
rs = require("readline-sync")
lado = rs.question("Digite o valor do primeiro lado : ")
lado1 = rs.question("Digite o valor do segundo lado : ")
lado2 = rs.question("Digite o valor do terceiro lado : ")

//Triângulo Equilátero
if ((lado&lado1&&lado2)==60 ) {
    console.log("Triangulo Equilatero pois os tres lados sao iguais")
    
}
//Triângulo Isóceles
else if ((lado==lado1)|| (lado1==lado2)||(lado2==lado)) {
    console.log("Triangulo Isoscele pois tem dois lados iguais")
    
} 
//Triângulo Escaleno
else if (lado!=lado2!=lado1) 
{console.log("Triangulo Escaleno pois todos os lados sao diferentes ")
    
} else {
    
} console.log("Fim")