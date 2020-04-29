var senha,rs;

rs = require("readline-sync")
senha = rs.question("Digite a senha : ")
if (senha == "batatafrita") {
    console.log("Acesso Permitido")
    
} else {
    console.log("Acesso Negado")
    
}