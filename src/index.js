const RomanNumber = require("./roman.js");

const rn1 = new RomanNumber(2999);
const rn2 = new RomanNumber("MCMLXXX");

console.log(rn1.toString());
console.log(rn2.toInt());
