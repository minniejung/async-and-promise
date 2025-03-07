const path = require("path");
const { getDataFromFile } = require("../01_callBack");

const jsonPath = path.join(__dirname, "..", "files/user1.json");
const user1txt = `{
  "name": "AliceKim",
  "age": 26,
  "sex": "FeMale",
  "company": {
    "name": "로켓부스트"
  }
}`;

describe("callback Test", () => {
  describe("getDataFromFile", () => {
    test("파일을 읽고 나서 callback이 실행되어야 합니다", (done) => {
      getDataFromFile(jsonPath, () => {
        expect(true).toBeTruthy();
        done();
      });
    });

    test("에러가 발생할 경우, callback 첫번째 인자에 에러 객체가 전달되어야 합니다", (done) => {
      getDataFromFile("nonexist", (err, data) => {
        expect(err.code).toBe("ENOENT");
        expect(data).toBeNull();
        done();
      });
    });

    test("callback 두번째 인자에 파일 내용이 전달되어야 합니다", (done) => {
      getDataFromFile(jsonPath, (err, data) => {
        expect(err).toBeNull();
        expect(JSON.parse(data)).toEqual(JSON.parse(user1txt));
        done();
      });
    });
  });
});
