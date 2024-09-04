// cách 2 fetch
// import fs from "fs";
// import fetch from "node-fetch";

// const currentDate = new Date();
// const dateString = currentDate
//   .toISOString()
//   .slice(0, 10)
//   .split("-")
//   .reverse()
//   .join("-");

// fetch("https://dummyjson.com/carts")
//   .then((response) => response.json())
//   .then((carts) => {
//     fs.writeFileSync(
//       `cart-${dateString}.js`,
//       `const cartData = ${JSON.stringify(carts, null, 2)};`
//     );
//     console.log("File saved using fetch");
//   })
//   .catch((error) => console.error("Error:", error));

// //cách 3 axios
import fs from "fs";
import axios from "axios";

const currentDate = new Date();
const dateString = currentDate
  .toISOString()
  .slice(0, 10)
  .split("-")
  .reverse()
  .join("-");

axios
  .get("https://dummyjson.com/carts")
  .then((response) => {
    const carts = response.data;
    fs.writeFileSync(
      `cart-${dateString}.js`,
      `const cartData = ${JSON.stringify(carts, null, 2)};`
    );
    console.log("File saved using axios");
  })
  .catch((error) => console.error("Error:", error));
