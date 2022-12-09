/// <reference path="utility-functions.ts" />
console.log(Utility.maxBooksAllowed(10));
console.log(Utility.Fees.calculateLateFee(100));
import util = Utility.Fees;
const result = util.calculateLateFee(20);
console.log({ result });
