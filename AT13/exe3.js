var rs = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\arbyte\\projetos\\logica\\DATA\\cars.json");
var cars = JSON.parse(json)


var hors = cars.filter( (obj) => (obj.Car.includes("Ford")))
console.log(`O total de carros da Ford e ${hors.length}`)