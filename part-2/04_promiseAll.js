const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([
    getDataFromFilePromise(user1Path),
    getDataFromFilePromise(user2Path),
  ]).then((data) => {
    return [JSON.parse(data[0]), JSON.parse(data[1])];
  });
};

readAllUsers();

module.exports = {
  readAllUsers,
};
