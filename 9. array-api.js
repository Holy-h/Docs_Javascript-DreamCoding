// Q1. make a string out of an array
// 내 코드 풀이
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.toString());
}
// Dreamcoder
{
  const fruits = ["apple", "banana", "orange"];
  let result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  let result = fruits.split(", ");
  console.log(result);
}

// Dreamcoder
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(", ");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.sort((a, b) => b - a);
  console.log(array);
}

// Dreamcoder
{
  const array = [1, 2, 3, 4, 5];
  let result = array.reverse();
  console.log(result);
  console.log(array);
  // 원 배열도 변경시킵니다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.slice(2);
  console.log(newArray);
}
// splice는 기존 배열을 변경시키므로, 사용할 수 없습니다.

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90 -- Array.find
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students -- Array.filter
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores -- Array.map
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50 -- Array.some
{
  for (let student of students) {
    if (student.score < 50) console.log(true);
  }
}
// Dreamcoder
{
  let result = students.some((student) => student.score < 50);
  console.log(result);
}

// Q9. compute students' average score -- Array.reduce
{
  const totalScore = students.reduce((acc, student) => {
    return acc + student.score;
  }, 0);
  console.log(totalScore / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
