var dd1,dd2,dd3,dd4,dd5;
var rs,dd;

rs = require("readline-sync");
dd = rs.questionInt("Digite o DDI:  ");


while (dd != 1 && dd != 49 && dd != 54 && dd != 55 && dd != 35) {
    console.log("DDI nao cadastrado  ")
    dd = rs.questionInt("Digite o DDI:  ");
} 

   
 if (dd == 1) {
     console.log("Estados Unidos")
    
} 
if (dd == 49) { 
    console.log("Alemanha")
    
}
if(dd == 54){
     console.log("Argentina")
    
} 
if (dd == 55) {
    console.log("Brasil")
    
} if  (dd == 35){
    console.log("Portugal")
    
}
 




