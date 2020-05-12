var rs = require("readline-sync");
var compra = [];

var n = rs.question('Digite a quantidade de produtos :  ');
for(var i = 0; n > i ; i++){
var valor = rs.questionFloat("Digite o valor dos produtos R$: ");
compra.push(valor);
}

var total = 0
for(i = 0; i < compra.length; i++){
var preco = compra[i];
total = preco + total;
console.log(`Produto ${i} valor ${preco}`)

}
console.log('Total da compra R$: '+total)
var  valorpago = rs.questionFloat('Dê dinheiro ao caixa:  ')
if (valorpago > total) {
    var troco = valorpago - total;
    console.log('Aqui esta seu troco R$: '+troco+' Obrigado, Volte Sempre...')
    
} 
else if (total == valorpago ) { console.log('Valor esta certo, Não tem troco, Obrigado, Volte Sempre...')

    
    
}
else{
    console.log('Esta faltando Dinheiro, ')
}