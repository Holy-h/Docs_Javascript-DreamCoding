"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending(진행 중) -> fulfilled(완료) or rejected(거부)
// Producer(promise object) vs Consumer

// 1. Producer
// ** when new Promise is created, the executor runs automatically.
// ** Promise의 인자인 executor 함수는 Promise가 만들어질 때 실행됩니다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("명령을 성공적으로 수행했습니다.");
    reject(new Error("네트워크가 없어, 명령을 수행하지 못했습니다."));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error))
  // catch를 사용하지 않는다면, Uncaught Error가 발생합니다.
  .finally(() => console.log("나는 항상 등장하지!"));

// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("🐔");
      reject(new Error(`error!`));
    }, 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} => 🥚`);
      // reject(new Error(`error! ${hen} => 🥚`));
    }, 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
// 받아오는 값을 다른 함수로 바로 전달하는 경우에는 다음과 같이 생략이 가능합니다.
getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🍞";
  })
  .then(cook)
  .then(console.log);
