function multiplesOfThreeAndFive(limit) {
  for (let index = 1; index <= limit; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(String(index) + '!')
    }
    else if (index % 3 === 0) {
      console.log(String(index))
    }
    else if (index % 5 === 0 ) {
      console.log(String(index))
    }
  }
}

multiplesOfThreeAndFive(100)