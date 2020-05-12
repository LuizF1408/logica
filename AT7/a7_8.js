var dados1 = []
var dados2 = []
var n = 0
var rs = require('readline-sync')
n = rs.questionInt('Digite o numero de dados que serao digitados: ')
if (n > 0) {
    for (i = 0; i < n; i++) {
        dados1[i] = rs.question('Digite o nome dos campos : ')
    }
} else (console.log('Numero invalido'))

for (i = 0; i < n; i++) {
    dados2[i] = rs.question('Digite o valor dos campos : ')
}
console.log(dados1[0]+" : "+dados2[0])
console.log(dados1[1]+" : "+dados2[1])
console.log(dados1[2]+" : "+dados2[2])
console.log(dados1[3]+" : "+dados2[3])