function repeat(string, times) {
  let newstr = ''
  if (typeof(times) === 'number' && times > 0) {
    for (let count = 0; count < times; count++) {
      newstr += string
    }
    console.log(newstr)
  }
  else if (times === 0) {
    console.log(newstr)
  }
  else{
    console.log(undefined)
  }
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined