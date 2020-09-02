const { hashchain } = require("./lib");

//University Creating Proving Kit

let aliceGPA = 3.7;
let normaliseAliceGPA = aliceGPA * 10;
let secretKey =
  "0000000000000000000000000000000034af56h3649b934ca495991ba46ca12f";
let counter = 0;
let proof = hashchain(secretKey, normaliseAliceGPA + 1, counter);
let proofKit = {
  name: "Alice",
  proof: proof,
  timestamp: Date.now(),
};

console.log("proofKit", proofKit);

//  Alice generate challenge based on threshold marks set by Employer
let thresholdMarks = 2.5;
let normaliseThresholdMarks = thresholdMarks * 10;
let challengeCount = Math.abs(1 + normaliseAliceGPA - normaliseThresholdMarks);
let challenge = hashchain(secretKey, challengeCount, counter);
console.log("challenge", challenge);

//Verification by Employer
//Alice send proofKit and challenge to Employer
let verification = hashchain(challenge, normaliseThresholdMarks, counter);
if (verification == proofKit.proof) {
  console.log("verified");
} else {
  console.log("verification failed");
}
