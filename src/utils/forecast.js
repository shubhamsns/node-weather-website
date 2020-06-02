const request = require("request");

const weatherRequest = (latitude, longitude, callback) => {
  const API_KEY = "8991379aef6f947195b36284b738ddf5";
  const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service", undefined);
    } else if (body.cod === "400") {
      callback("Unable to find data for given location", undefined);
    } else {
      callback(
        undefined,
        `${body.weather[0].main}, Current temprature is ${body.main.temp}°C`
      );
    }
  });
};

module.exports = weatherRequest;
