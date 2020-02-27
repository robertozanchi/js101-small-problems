// Even Numbers

//Solution 1

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// LS solution
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
