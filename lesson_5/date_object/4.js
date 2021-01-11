let today = new Date()

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let dayNumber = today.getDay()

console.log(`Today's day is ${daysOfWeek[dayNumber]}, the ${today.getDate()}th`)