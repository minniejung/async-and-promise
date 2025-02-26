const newsURL = "http://localhost:4999/data/latestNews";
const weatherURL = "http://localhost:4999/data/weather";

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let news = await fetch(newsURL).then((res) => res.json());
  let weather = await fetch(weatherURL).then((res) => res.json());

  return { news: news.data, weather };
}

getNewsAndWeatherAsync();

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
