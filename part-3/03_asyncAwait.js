const newsURL = "http://localhost:4999/data/latestNews";
const weatherURL = "http://localhost:4999/data/weather";

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  return [
    JSON.parse(await getDataFromFilePromise(newsURL)),
    JSON.parse(await getDataFromFilePromise(weatherURL)),
  ];
}
if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
