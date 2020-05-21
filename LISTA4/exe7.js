var saque;
var saldo = 0
var deposito = 0

var rs = require('readline-sync')
console.log('Digite o numero da opção a ser realiazada')
console.log('(1) Consulta Saldo, (2) Saque, (3) Depósito, (4) Sair')
var op = rs.questionInt('Opcao: ')


while (true) {


    if (op == 4) {console.clear()
        console.log('Volte sempre Obrigado!')
        break
    }
    if (op == 3) {console.clear()
        deposito = rs.questionFloat('Qual valor sera depositado :')
        saldo = saldo + deposito
        console.log(`Valor depositado com sucesso!`)
        console.log('Digite o numero da opção a ser realiazada')
        console.log('(1) Consulta Saldo, (2) Saque, (3) Depósito, (4) Sair')
        op = rs.questionInt('Opcao: ')
    }
    if (op == 2) {console.clear()
        saque = rs.questionFloat('Quanto deseja sacar ? ')
        
        if (saque > saldo) {
            console.log('Saldo insuficiente')
            console.log('Digite o numero da opção a ser realiazada')
            console.log('(1) Consulta Saldo, (2) Saque, (3) Depósito, (4) Sair')
            op = rs.questionInt('Opcao: ')

        }else{ (saldo > saque)
            saldo = saldo - saque
            console.log('Digite o numero da opção a ser realiazada')
            console.log('(1) Consulta Saldo, (2) Saque, (3) Depósito, (4) Sair')
            console.log(`Seu saldo atual e R$: ${saldo}`)
            op = rs.questionInt('Opcao: ')

        }

    }
    if (op == 1) {console.clear()
        console.log(`O saldo total é de R$: ${saldo} reais`)
        console.log('Digite o numero da opção a ser realiazada')
        console.log('(1) Consulta Saldo, (2) Saque, (3) Depósito, (4) Sair')
        op = rs.questionInt('Opcao: ')
       

    }
}