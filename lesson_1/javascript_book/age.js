let age = 20

console.log(`You are ${age} years old`)

for (let age_calc = 10; age_calc < 40; age_calc += 10) {
  console.log(`In ${age_calc} years, you will be ` + (age + age_calc) + " years old.");
}