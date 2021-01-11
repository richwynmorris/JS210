function dateSuffix (date) {
  const teens = ['11', '12', '13', '14', '15', '16', '17', '18', '19']
  const firstSecondThird = { 1:'st', 2:'nd', 3:'rd'}

  let dateString = String(date)
  let lastTwoNums = dateString.slice(dateString.length - 2)
  let lastNum = dateString.slice(dateString.length - 1)

  if (teens.includes(lastTwoNums)) {
    return date + 'th'
  } else if (Object.keys(firstSecondThird).includes(lastNum)) {
    return date + firstSecondThird[lastNum]
  } else {
    return date + 'th'
  }
}

let today = new Date()

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let dayNumber = today.getDay()

console.log(`Today's day is ${daysOfWeek[dayNumber]}, the ${dateSuffix(today.getDate())}`)