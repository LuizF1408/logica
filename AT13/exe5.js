var rs = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\arbyte\\projetos\\logica\\DATA\\cars.json");
var cars = JSON.parse(json)
 var carros = cars.sort((a,b) => (b.Horsepower - a.Horsepower))
 console.log('*** Este e o carro mais potento ***');
 
 console.log(carros[0])