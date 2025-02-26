const newsURL = "http://localhost:4999/data/latestNews";
const weatherURL = "http://localhost:4999/data/weather";

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  const newsData = fetch(newsURL).then((res) => res.json());
  const weatherData = fetch(weatherURL).then((res) => res.json());

  return newsData.then((news) => {
    return weatherData.then((weather) => {
      return { news: news.data, weather };
    });
  });
}

getNewsAndWeather();

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeather,
  };
}
