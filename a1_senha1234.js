var senha
var rs
rs = require("readline-sync")
senha = rs.question("Digite a senha para acessar sua conta ")
if (senha == 1234) {console.log("ACESSO PERMITIDO")
    
}
else console.log("ACESSO NEGADO")