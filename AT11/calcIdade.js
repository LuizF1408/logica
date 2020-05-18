const age = require('age-calculator')
var rs = require('readline-sync')
var ano,mes,dia
console.log('Digite sua data de nascimento "Exemplo 14/08/1998"');
dia = rs.questionInt("DIA: ")
mes = rs.questionInt("MES: ")
ano = rs.questionInt("ANO: ")
let ageFromDate = new age(new Date(ano, mes-1, dia)).age;
  console.log(ageFromDate);