

var rs = require("readline-sync");
var text = rs.question("Digite uma palavra :  ");
var palavraAlterada = " ";



for (i = 0; i < text.length; i++) {
    if (text.charAt(i) == "a") {

        palavraAlterada = palavraAlterada + "A";


    }
    else {

        palavraAlterada = palavraAlterada + text.charAt(i);
    }
}
console.log(palavraAlterada)
