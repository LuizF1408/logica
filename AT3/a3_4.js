var cont,rs ;
rs =require("readline-sync")

cont = rs.questionInt("Digite um numero:  ")
    while (cont != 0) {
        var resto = cont%2;
        if (resto == 0){
            console.log( cont);
        }
        cont = cont - 1;
    }
    console.log("FIM");