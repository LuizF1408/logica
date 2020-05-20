var nome;
var idade;
var cont = 0

var rs = require('readline-sync');
while (true) {
    nome = rs.question('Digite o nome: ');
    nome = nome.toUpperCase()
    if (nome == 'FINAL') {
        console.log(`O numero de cadastros é ${cont}`)
        break

    }
    else{
    
    idade = rs.question('Digite a idade: ');
    console.log(`O nome é ${nome} e a idade é ${idade}`)
    cont = cont + 1
    }
}
