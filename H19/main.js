import { result } from "./userAddress.js";
import { cleanedObj } from "./cleanObject.js";
import { employee } from "./personEmployee.js";
import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";

function main() {
  console.log("User and Address Result:", result);

  console.log("Cleaned Object:", cleanedObj);

  console.log("Employee Info:", employee.name, employee.jobTitle);

  const a = 0.1;
  const b = 0.2;
  console.log(`Add: ${add(a, b)}`);
  console.log(`Subtract: ${subtract(a, b)}`);
  console.log(`Multiply: ${multiply(a, b)}`);
  console.log(`Divide: ${divide(a, b)}`);
}

main();
