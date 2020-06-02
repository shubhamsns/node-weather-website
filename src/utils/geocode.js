const request = require("request");

const geoCode = (address, callback) => {
  const geoCoadingApiKey =
    "pk.eyJ1Ijoibm9vYmVzaHdhciIsImEiOiJja2FvdDl6cDQyNmYzMzFsbWIyazFwajI1In0.CRHrNfOlIqJwqxWyRN5waQ";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?limit=1&access_token=${geoCoadingApiKey}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!!!", undefined);
    } else if (body.message || body.features.length === 0) {
      callback("Unable to find location, Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
