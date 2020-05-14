var n = 10
var res

for(var divisor = 2;divisor < n;divisor=+2){

    if(n%divisor!=0)
    res++
}
console.log(res)