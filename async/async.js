// async & await
// clear style of using promise!
// promise를 쓰지 말라는 것은 아닙니다!

// 1. async

// Promise
// function fetchUser() {
//   // do network request in 10 sec...
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("김병훈");
//     }, 1000);
//   });
// }

// fetchUser() //
//   .then(console.log);

// Async
// async를 함수 앞에 입력하면, 해당 함수는 Promise를 반환합니다.
async function fetchUser() {
  // do network request in 10 sec...
  return "김병훈";
}

const user = fetchUser();
user //
  .then(console.log);

console.log(user);

// 2. await 🦄
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1001);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// Promise chaning으로 인한 callback Hell

// function pickFruits() {
//   return getApple().then((apple) =>
//     getBanana().then((banana) => `${apple} + ${banana}`)
//   );
// }

// async-await으로 콜백지옥에서 벗어나기

// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// pickFruits().then(console.log);
// console.log(pickFruits());

// 에러를 다루는 방법
// try - catch
// async function pickFruits() {
//   try {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
//   } catch (error) {
//     return error;
//   }
// }

// pickFruits().then(console.log);
// console.log(pickFruits());

// await을 병렬로 처리하는 방법

async function pickFruits() {
  // Promise를 만들 때, 내부 명령어가 실행됩니다.
  // await으로 실행시키지 않았기 때문에, 두 명령어는 병렬적으로 실행됩니다.
  // 주의: 사과를 받아오는 데 바나나가 필요없고, 바나나를 받아오는 데 사과가 필요 없어야 함
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 만들어 놓은 프로미스는 실행되고 있으며, 그 값을 가져오는 부분에 await을 붙여줍니다.
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
console.log(pickFruits());

// 3. Promise APIs
// Promise를 다룰 수 있게 하는 유용한 API들이 있다.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
