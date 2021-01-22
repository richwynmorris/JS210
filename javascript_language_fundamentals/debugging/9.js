const totalPages = 364;
let energy = 100;

function read(args=1) {
  
  let currentPage = args;

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read(currentPage);
  } else {
    console.log('Done!');
  }
}

read();