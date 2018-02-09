exports.welcome = () => {
  console.log("Welcome to the DDash Library");
};

exports.distanceCalculator = (feature1, feature2) => {
  console.log("Welcome to the DDash Library");
  const distance = 700;
  return distance;
};

exports.niceDate = () => {
  const d = new Date();
  console.log("Welcome to the nice date function", d);
  return d;
};

exports.nowDate = (start, end) => {
  console.log("Welcome to the nice date function");
  return true;
};

exports.getCount = () => {
  const count = Math.floor(Math.random() * 20000);
  return count;
};

exports.gecoder = (ln, cb, key) => {
  const { address, city, state } = ln;
  const protocol = "https://";
  const url = address + "," + city + "," + state;
  const api = "maps.googleapis.com/maps/api/geocode/json?address=";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      const location = JSON.parse(xhr.responseText).results[0].geometry
        .location;
      cb(location);
    }
  };
  xhr.open("GET", protocol + api + url + key, true);
  https: xhr.send(null);
};
