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
let dayNumber = today.getDay()
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let currentDay =  daysOfWeek[dayNumber];
let currentMonth = months[today.getMonth()];

console.log(`Today's day is ${currentDay} ${currentMonth}, ${dateSuffix(today.getDate())}`)