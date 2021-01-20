// 1: 

let title = "The Three-Body Problem";

// * Uses double quotes instead of single quotes. Use single quotes for strings 

let title = 'The Three-Body Problem'

// 2:

let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;

// Each new variable should be initialized with a let declaration. The variable name on line 13 should be camelCase. 

let title = 'The Three-Body Problem'
let author = 'Cixin Liu',
let pageCount = 400;


// 3:

let completed = lastPageRead == 400;

// You should always the strict equality operator when comparing two values. 

let completed = lastPageRead === 400;

// 4: 

if (finishedBook())
  console.log('You have finished reading this book');

// Always use curly braces for multiline blocks in conjunction with if conditional statments.

if (finishedBook()) {
  console.log('You have finished reading this book');
}

// 5: 

function read(pages) {
  console.log('You started reading.');
  for (let page=0; page<pages; page += 1) {
          let message = 'You read page '+page;
          console.log(message);
  }
}

read(400);


// fuction contains missing spaces between variable assignment and  comparison operators.
// function has no clear purpose and performs multiple operations.
// function does not explicitly return a value. Only returns undefined.
// function uses indentation incorrectly. 
// The guide also recommends using named function expressions rather than function declarations. 
// The guide recommends explicit coercion when concatanating values. 

let read = function(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
}

read(400);
