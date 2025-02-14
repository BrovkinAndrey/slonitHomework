function sumArr(arr) {
  let sum = 0;
  arr.forEach(i => {
    sum += i;
  });
  return sum;
}

let mostSumsOfCustomers = [10000, 20000, 30000];
console.log(sumArr(mostSumsOfCustomers));