var n1,n2,n3,rs
rs = require("readline-sync")
n1 = rs.question("Digite o valor do primeiro lado : ")
n2 = rs.question("Digite o valor do segundo lado : ")
n3 = rs.question("Digite o valor do terceiro lado : ")


if(n1 == 90 || n2 ==90 || n3 == 90){ //se tiver qualquer um dos ãngulos reto
    console.log(" Retangulo ")
}
else if(n1 > 90 || n2 >90 || n3 > 90){ //se tiver qualquer um dos angulos maiores que 90
    console.log(" Obtusangulo ")
}
else if(n1 < 90 && n2 < 90 && n3 < 90){ //se tiver todos os ãngulos menores que 90
    console.log(" Acutangulo ")
} 
