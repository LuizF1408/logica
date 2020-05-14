var rs = require('readline-sync')
var dia,mes,ano;
dia = rs.questionInt('Digite a quantidade de dias : ')
mes = rs.questionInt('Digite a quantidade de meses : ')
ano = rs.questionInt('Digite a quantidade de anos : ')

function idadeEmDias(){

   var totalDias = (ano*365) + (mes*30) + dia
   return totalDias 
}

var dia = idadeEmDias(ano,mes,dia)
console.log(dia)
