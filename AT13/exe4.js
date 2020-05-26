var rs = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\arbyte\\projetos\\logica\\DATA\\cars.json");
var cars = JSON.parse(json)
var media = 0
var Filtro = 'Europe'
var hors = cars.filter( (obj) => (obj.Origin == Filtro ))
hors.forEach(carro => media = media + carro.Horsepower)
media = media/73  


console.log(`A media de Horsepower dos carros Europeus e ${media.toFixed(2)}`)