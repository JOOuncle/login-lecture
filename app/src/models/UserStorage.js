"user strict";

class UserStorage {
  static #users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      console.log(newUsers, field);
    });
    return;
  }
}

module.exports = UserStorage;
