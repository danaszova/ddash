exports.welcome = () => {
  console.log("Welcome to the DDash Library");
};

exports.distanceCalculator = (feature1, feature2) => {
  //TODO finish and test distance calculator
  //is actually done for happy nour should be broken out
  const distance = 700;
  return distance;
};

exports.niceDate = () => {
  //TODO finish and test nice date functions
  const d = new Date();
  console.log("Welcome to the nice date function", d);
  return d;
};

exports.nowDate = (start, end) => {
  //TODO finish no date function
  console.log("Welcome to the nice date function");
  return true;
};

exports.getCount = () => {
  //simulates a get count operation and returns a random number
  const count = Math.floor(Math.random() * 20000);
  return count;
};

exports.matchCalculate = (item1, item2) => {
  //basic matching calculation to compare 2 objects with same keys
  //iterates through and calcualates a percent match for each values
  //Takes everage and returns as percent
  let match = 0;
  Object.values(item1).forEach((value, i) => {
    const difference = value - Object.values(item2)[i];
    match = match + (10 - Math.abs(difference)) * 10;
  });
  match = match / Object.values(item1).length;
  match = Math.floor(match);
  return match;
};

exports.matchCalcDiff = (item1, item2) => {
  //TODO finish and test
  //basic matching calculation to compare 2 objects with different keys
  // must have at least 1 matching key
  //iterates through and calcualates a percent match for each values
  //Takes everage and returns as percent
  const keys = Object.keys(item1);

  let match = 0;
  Object.values(item1).forEach((value, i) => {
    const difference = value - Object.values(item2)[i];
    match = match + (10 - Math.abs(difference)) * 10;
  });
  match = match / Object.values(item1).length;
  match = Math.floor(match);
  return match;
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
