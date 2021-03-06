class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "binitiger" && password === "bini") ||
          (id === "bonggt" && password === "hada")
        ) {
          resolve(id);
        } else {
          reject(new Error("not Found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "bonggt") {
          resolve({ name: "김병훈", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const id = prompt("아이디를 입력하세요", "bonggt");
const password = prompt("비밀번호를 입력하세요", "hada");

let userStorage = new UserStorage();
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(({ name, role }) => console.log(name, role))
  .catch(alert);
