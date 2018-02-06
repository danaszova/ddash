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
  const count = Math.random();
  console.log("Welcome to the get count ", count);
  return count;
};
