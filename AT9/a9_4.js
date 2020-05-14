var rs = require('readline-sync')
var n = rs.questionInt('Digite um numero: ')
function tabuada(){

    for(var i = 1; i <= 10;i++){
        var res = n*i
    console.log(n,' x '+i+' = ',res)
    }
return

}
var tab = tabuada(n)
