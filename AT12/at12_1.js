var rs = require('readline-sync')
var compara = []
class carro {
    constructor(marca,modelo,cor){
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
}
}
function criaCarro(marca,modelo,cor){
    var veiculo = new carro(
    this.marca = rs.question('Digite a marca do carro: '),
    this.modelo = rs.question('Digite o modelo do carro: '),
    this.cor = rs.question('Digite a cor do veiculo: '),
    )
return veiculo

}
for (var i = 0; i < 2; i++) {
    compara.push(criaCarro())

}
console.log(compara)

if ((compara[0].marca === compara[1].marca) && (compara[0].modelo === compara[1].modelo)){
    console.log('Os veiculos são iguas')
}
else{
    console.log('Os veiculos são diferentes')
}