var j1 = 'Jogador 1'
var j2 = 'Jogador 2'
var n1, n2
var rs = require('readline-sync')
n1 = rs.question(j1 + ' Digite PEDRA , PAPEL, TESOURA :', { hideEchoBack: true }).toLowerCase()
n2 = rs.question(j2 + ' Digite PEDRA , PAPEL, TESOURA :', { hideEchoBack: true }).toLowerCase()
//Jogador 1
if ((n1 === 'pedra') && (n2 === 'tesoura')) {
    console.log(j1 + ' Ganhou !')
}
if ((n1 === 'papel') && (n2 === 'pedra')) {
    console.log(j1 + ' Ganhou !')
}
if ((n1 === 'tesoura') && (n2 === 'papel')) {
    console.log(j1 + ' Ganhou !')
}//Jogador 2
if ((n2 === 'pedra') && (n1 === 'tesoura')) {
    console.log(j2 + ' Ganhou !')
}
if ((n2 === 'papel') && (n1 === 'pedra')) {
    console.log(j2 + ' Ganhou !')
}
if ((n2 === 'tesoura') && (n1 === 'papel')) {
    console.log(j2 + ' Ganhou !')
}