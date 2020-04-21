var rs,nm,valor
rs = require("readline-sync")
nm = rs.question("Quantas macas deseja comprar ? ")
if (nm <= 12)
valor = nm * 0.30
{console.log("O valor da compra e R$: "+valor)
    
}
if (nm >= 13) 
valor = nm * 0.25
    {console.log("O valor da compra e R$ : "+valor)
}
   
    

 