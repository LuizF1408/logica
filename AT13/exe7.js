var rs = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\arbyte\\projetos\\logica\\DATA\\cars.json");
var cars = JSON.parse(json)
var decisao = rs.question('Digite A para carro com maior aceleracao , Digite B para carro com maior potencia : ').toLowerCase()
if (decisao == "a") {

    var potencia = cars.sort((a, b) => b.Horsepower - a.Horsepower)
    var maiorpo = potencia[0].Horsepower
    // for (var i = 0; i < potencia.length; i++) {
    //     if (maiorpo == potencia[i].Horsepower) {
    //         console.log(potencia[i])
    //     }


    // }
    potencia.forEach((carro) =>  {if (carro.Horsepower == maiorpo) console.log(carro)})
}
else if (decisao == "b") {
        var potencia = cars.sort((a, b) => a.Acceleration - b.Acceleration)
        var maiorpo = potencia[0].Acceleration
        // for (var i = 0; i < potencia.length; i++) {
        //     if (maiorpo == potencia[i].Acceleration) {
        //         console.log(potencia[i])
        //     }
        // }
        // ):
        

        potencia.forEach((carro) =>  {if (carro.Acceleration == maiorpo) console.log(carro)})
        
      



    }
    else (console.log('Opcao invalida'))