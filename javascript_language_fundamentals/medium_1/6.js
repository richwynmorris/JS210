// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The above logs 'debugging' because functions are able to access variables initialized outside of their scope.  
// This is a feature of javascripts lexical scoping rules. 