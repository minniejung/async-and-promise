const fs = require("fs");

const getDataFromFilePromise = (filePath) => {
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

getDataFromFilePromise("README.md").then((data) => console.log(data));

module.exports = {
  getDataFromFilePromise,
};
