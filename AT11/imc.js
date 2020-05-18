const rs = require('readline-sync')
a = rs.questionFloat('Digite sua altura: ')
p = rs.questionInt('Digite seu peso: ')
const fasam = require('fasam-imc-calc')

const imc = new fasam(p,a)
console.log(imc.calc())