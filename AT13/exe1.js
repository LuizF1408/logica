var rs = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\arbyte\\projetos\\logica\\DATA\\cars.json");
var cars = JSON.parse(json)

var nmr = rs.questionInt('Digite um Horsepower: ')
var hors = cars.filter( (obj) => (obj.Horsepower >= nmr ))
console.log(`Existem ${hors.length} carros com Horsepower maior que ${nmr}`)