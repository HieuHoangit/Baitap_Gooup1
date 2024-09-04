const fs = require("fs");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest();
const dateString = new Date()
  .toISOString()
  .slice(0, 10)
  .split("-")
  .reverse()
  .join("-");

xhr.open("GET", "https://dummyjson.com/carts", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const carts = JSON.parse(xhr.responseText);
    fs.writeFileSync(
      `cart-${dateString}.js`,
      `const cartData = ${JSON.stringify(carts, null, 2)};`
    );
    console.log("File saved using XMLHttpRequest");
  }
};

xhr.send();
