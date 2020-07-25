"use strict";

// Array 😍

// 1. Declaration (배열 만들기)
const arr1 = new Array(); // Array 안에는 배열의 길이가 들어갑니다.
const arr2 = []; // 보통 이 방법으로 배열을 만든답니다.

// 2. Index position (배열의 인덱스를 통해 요소의 위치를 알 수 있어요)
console.group("Index position");
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // Object에서 key를 통해 해당 value를 찾을 때 사용했던 방법과 유사
console.log(fruits[1]);
console.log(fruits[2]); // 아무 것도 들어있지 않아요! undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막 요소를 찾고 싶다면, 배열의 길이를 이용해보세요.
console.groupEnd();

// 3. Looping over an array
console.group("Looping over an array");
// print all fruits

// a. for..of를 사용하는 방법
// for..of는 Object의 프로퍼티's value를 출력할 때 사용되었었죠.
console.group("for..of");
for (let fruit of fruits) {
  console.log(fruit);
}
console.groupEnd();

// b. forEach를 사용하는 방법
console.group("forEach");
fruits.forEach((fruit, index, array) => console.log(fruit, index));
console.groupEnd();

// c. for를 사용하는 방법
console.group("for");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.groupEnd();
console.groupEnd();

// 4. Addition, deletion, copy
console.group("Addition, deletion, copy");

console.group("push & pop");
// push: add an item to the end
fruits.push("🍉", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

console.groupEnd();

console.group("unshift & shift");
// unshift: add an item to the beginning
fruits.unshift("🍉", "🍑");
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

console.groupEnd();

// note!! shift, unshift are slower than pop, push

console.group("splice: remove an item by index position");
// splice: remove an item by index position
fruits.push("🍇", "🥑", "🍍");
console.log(fruits);
fruits.splice(1, 1, "🍉", "🍑");
console.log(fruits);

console.groupEnd();

console.group("concat: combine two or more arrays");
// concat: combine two arrays
const fruits2 = ["🍓", "🍒"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.groupEnd();

// 전개 문법을 통해 배열을 합치는 것도 가능합니다.
console.group("spread syntax: combine two or more arrays");
const newFruits2 = [...fruits, ...fruits2];
console.log(newFruits2);
console.groupEnd();

console.groupEnd();

console.group("Search");
// 5. Searching
// find the index
console.log(fruits);
console.group("indexOf: 너 이거 어디에 있냐?");
console.log(fruits.indexOf("🍇")); // 🍇의 index는 3이야! (3)
console.log(fruits.indexOf("🍒")); // 🍒는 fruits 배열에 없어... (-1)
console.groupEnd();

console.group("includes: 너 이거 가지고 있냐?");
console.log(fruits.includes("🥑")); // 으..응! 그거 있어! (true)
console.log(fruits.includes("🍓")); // 아니... 나 그건 없는데... (false);
console.groupEnd();

// lastIndexOf
console.group("lastIndexOf: 너 이거 어디에 있냐? 뒷주머니부터 뒤져봐");
fruits.push("🥑");
console.log(fruits);
console.log(fruits.indexOf("🥑"));
console.log(fruits.lastIndexOf("🥑"));
console.groupEnd();

console.groupEnd();

// Quiz:
