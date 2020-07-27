"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration

// 1. 동기와 비동기
console.log("1");
setTimeout(() => console.log("2"), 1000);
// setTimeout()은 브라우저 메서드입니다.
// 브라우저에서 1초의 시간이 흐른 후 콜백 함수가 실행됩니다.
console.log("3");

// 2. 콜백 마지막 정리

// Synchronous callback (즉각적으로 실행되는 콜백)
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("print"));

// Asynchronous callback (나중에 실행되는 콜백)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("printWithDelay"), 1000);

// 3. 콜백 지옥 체험
// Callback Hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "binitiger" && password === "bini") ||
        (id === "bonggt" && password === "hada")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not Found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "bonggt") {
        onSuccess({ name: "김병훈", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const id = prompt("아이디를 입력하세요", "bonggt");
const password = prompt("비밀번호를 입력하세요", "hada");

let userStorage = new UserStorage();
userStorage.loginUser(
  id,
  password,
  (id) => {
    console.log("loginUser");
    userStorage.getRoles(
      id,
      ({ name, role }) => console.log(name, role),
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);
