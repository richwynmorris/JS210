function gcd (a,b) {
  let remainder = (a % b)
  
  while (remainder !== 0) {
    a = b
    b = remainder
    remainder = (a % b)
  }
  console.log(b)
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1
gcd(12, gcd(4, 8)); 