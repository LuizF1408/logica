var num = [8, 65, 4, 3, 4, 10, 50, 32, 40, 55]


for (var cont = 0; cont > num.length - 1; cont++) {

  for (var i = 0; i < num.length - 1; i++) {

    if (num[i] > num[i + 1]) {
      [num[i] ,num[i+1]] = [num[i+1],num[i]]
    }
  }
}
console.log(num)