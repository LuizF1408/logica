var n1,n2,n3,med,rs
rs = require("readline-sync")
n1 = rs.questionFloat("Digite a primeria nota  ")
n2 = rs.questionFloat("Digite a segunda nota  ")
n3 = rs.questionFloat("Digite a terceira nota  ")
med = (n1+n2+n3)/3;
if (med >= 7) {console.log("Aluno Aprovado")
    
} else {console.log("Aluno reprovado")
    
}