const RomanNumber = require("./roman.js");

const rn1 = new RomanNumber(2999);
const rn2 = RomanNumber("MCMLXXX");

console.log(`${rn1.toInt()} in Roman is: ${rn1.toString()}`);
console.log(`${rn2.toString()} in Arabic is: ${rn2.toInt()}`);
