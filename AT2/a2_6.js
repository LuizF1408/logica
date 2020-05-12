var valor,rs,pag;
rs = require("readline-sync");
valor = rs.questionInt("Digite o valor do produto : ");
console.log("Escolha a forma de pagamento : ");
console.log("1 A vista (Dinheiro ou Cheque)");
console.log("2 A vista Cartao de credito ");
console.log("3 Parcelado 2x s/juros")
console.log("4 3x mais 10% juros")
pag = rs.questionInt(" ")
if (pag == 1) {
    valor = valor-(valor*0.15);
    console.log("O valor final e R$ :  "+valor);
    
}
else if (pag == 2) {
    valor = valor-(valor*0.10);
    console.log("O valor final e R$ :  "+valor);
    
}
 else if(pag == 3){
    
    console.log("O valor final e R$ :  "+valor);
}
else if(pag == 4){
    valor = valor+(valor*0.10);
    console.log("O valor final e R$ :  "+valor);

}