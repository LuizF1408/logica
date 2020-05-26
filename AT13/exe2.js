var rs = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\arbyte\\projetos\\logica\\DATA\\cars.json");
var cars = JSON.parse(json)

var Japan = 'Japan'
var hors = cars.filter( (obj) => (obj.Origin == Japan ))
console.log(`A quantidade de carros Japoneses e ${hors.length}`)