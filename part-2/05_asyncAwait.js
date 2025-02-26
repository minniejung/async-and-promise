const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
  return [
    JSON.parse(await getDataFromFilePromise(user1Path)),
    JSON.parse(await getDataFromFilePromise(user2Path)),
  ];
};

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait,
};
