function formatTime(time) {
  let hours = ''
  
  if (String(time.getHours()).length === 1) {
    hours = '0' + String(time.getHours())
  } else {
    hours = String(time.getHours())
  }

  let minutes = String(time.getMinutes())
  
  return hours + ':' + minutes
}


let time = new Date

console.log(formatTime(time))