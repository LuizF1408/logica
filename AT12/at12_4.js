var rs = require('readline-sync')
var media = require('./meuMod')
var AL = []
var med = []
class alunos {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
function cadastrarAluno() {

    var primeiroAluno = new alunos(
        this.nome = rs.question('Digite o nome do aluno(a): '),
        this.idade = rs.question('Digite a idade do aluno(a): '),
    )
    return primeiroAluno

}
for (var i = 0; i < 3; i++) {
    AL.push( cadastrarAluno())
    med.push((AL[i].idade))

}
// if((AL[0].idade >= AL[1].idade ) && (AL[0].idade >= AL[2].idade) ){
//     console.log('O aluno(a) ',AL[0].nome, 'tem a idade de ',AL[0].idade,' Anos')

// }

// if((AL[1].idade >= AL[2].idade ) && (AL[1].idade >= AL[0].idade) ){
//     console.log('O aluno(a) ',AL[1].nome, 'tem a idade de ',AL[1].idade,' Anos')

// }

// if((AL[2].idade >= AL[1].idade ) && (AL[2].idade >= AL[0].idade) ){
//     console.log('O aluno(a) ',AL[2].nome, 'tem a idade de ',AL[2].idade,' Anos')

// }
var maiorIdade = 0
for (var i = 0 ; i < AL.length ;i++){
    var idadeAtual = AL[i].idade
    if(idadeAtual > maiorIdade){
        maiorIdade = idadeAtual
    }

}

for (var i = 0 ; i < AL.length;i++ ){
    if(maiorIdade ==AL[i].idade){
        console.log(AL[i])
    }
}
media.mediaIdade(AL)