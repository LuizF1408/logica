var n1, n2, n3, rs, maior, menor, meio;

rs = require("readline-sync")
n1 = rs.questionInt("Digite o primeiro valor ")
n2 = rs.questionInt("Digite o segundo valor ")
n3 = rs.questionInt("Digite o terceiro valor ")
if ((n1 > n2) && (n1 > n3)) {
    maior = n1;
    if (n2 < n3) {
        meio = n3
        menor = n2
    }
    else {
        meio = n2
        menor = n3
    }


}
else if ((n2 > n1) && (n2 > n3)) {
    maior = n2;
    if (n1 < n3) {
        meio = n3
        menor = n1
    }
    else {
        meio = n1
        menor = n3
    }
}


console.log(menor, meio, maior)


