// Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

//     If the average score is greater than or equal to 90 then the grade is 'A'
//     If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
//     If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
//     If the average score is less than 50 then the grade is 'F'


let scoreOne = prompt('Enter score 1:')
let scoreTwo = prompt('Enter score 2:')
let scoreThree = prompt('Enter score 3:')

averageScore = (scoreOne + scoreTwo + scoreThree) / 3
let grade

switch(true) {
  case averageScore >= 90:
    grade = 'A'
    break
  case averageScore >= 70:
    grade = 'B'
    break
  case averageScore >= 50:
    grade = 'C'
    break
  default:
    grade = 'D'
    break
}

console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`)
