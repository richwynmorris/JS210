// We can use the number of minutes before or after midnight to represent the time of day. 

// If the number of minutes is positive, the time is after midnight. 

// If the number of minutes is negative, the time is before midnight.

// The timeOfDay function shown below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). 

//Reimplement the function using JavaScript's Date object.

//Examples:

function timeOfDay(deltaMinutes) {
  let time = new Date('March 13, 00:00')

  time.setMinutes(time.getMinutes() + deltaMinutes)

  return time.toTimeString().slice(0,5))
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"