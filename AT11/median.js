var median = require('median');
var chalk = require('color-name')
var rs = require('readline-sync');
var ar = []
console.log('Digite as 4 notas : ')
for(i = 0;i<4;i++){
    
ar[i] = rs.questionInt('N : ') 

}
var media = median(ar)
console.log(chalk.red('A media das notas e : '+media))