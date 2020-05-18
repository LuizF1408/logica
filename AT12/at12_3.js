var modulo = require('./meuMod')
var rs = require('readline-sync')
var n = []
for(var i = 0;i <3;i++){
n[i] = rs.questionInt('Manda numero:')

}
modulo.moduloMedia(n)