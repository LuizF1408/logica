var rs = require('readline-sync')
var a = []
var b = []
var repeated = [];
var nome1 = rs.question('Digite o nome do primeiro jogador : ')
var nome2 = rs.question(' Digite o nome do segundo jogador : ')
console.log('Digite 5 notas de 0 a 10 para o Primeiro jogador :')
for (i = 5; i > 0; i--) {
    var nota = rs.questionInt('Nota : ')
    a.push(nota)
}
console.log('Digite 5 notas de 0 a 10 para o Segundo jogador :')
for (i = 5; i > 0; i--) {
    var nota = rs.questionInt('Nota : ')

    b.push(nota)
}
for (i = 0;i < b.length;i++){
var valorDeB = b[i];
if (!a.includes(valorDeB)) repeated.push(valorDeB);
}
console.log(repeated)