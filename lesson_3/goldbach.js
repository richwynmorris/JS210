function isPrime(num) {
  if (num <= 1) {
    return false
  }
  for (let index = 2; index < num; index += 1) {
    if (num % index === 0) {
      return false
    }  
  }
  return true
}

function checkGoldbach (sum_num) {
  let primeNumbers = []
  let sumPrimeNumbers = []
  
  for (let index = 1; index < sum_num; index ++) {
    if (isPrime(index)) {
      primeNumbers.push(index)
    }
  }
    
  primeNumbers.forEach(function(num) {
    primeNumbers.forEach(function(num1) {
      if (num + num1 === sum_num && sumPrimeNumbers.includes(num && num1) === false){
        sumPrimeNumbers.push(num, num1);
      }
    });
  });
  
  if (sumPrimeNumbers.length === 0) {
    console.log('null');
    return
  }
  
  let index = 0
  let index2 = 1
  while (index2 <= sumPrimeNumbers.length) {

    console.log(sumPrimeNumbers[index], sumPrimeNumbers[index2])
    index += 2
    index2 += 2
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53