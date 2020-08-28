var crypto = require("crypto");

const generateHash = (input) => {
  var hash = crypto.createHash("sha256");
  return hash.update(input).digest("hex");
};

const hashchain = (input, count, i) => {
  i++;
  let res = generateHash(input);
  if (i == count) {
    return res;
  }
  return hashchain(res, count, i);
};

module.exports = { generateHash, hashchain };
