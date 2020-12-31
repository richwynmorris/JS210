function generatePattern (num) {
  let starCount = num
  let stringNum = '1'
  for (let index = 2; index > (num + 1) === false; index++) {
    console.log(stringNum + '*'.repeat((starCount - 1)))
    stringNum += String(index)
    starCount -= 1
  }
}

generatePattern(7)