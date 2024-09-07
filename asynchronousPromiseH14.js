function demoPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log("Random Number:", randomNumber);
    if (randomNumber >= 5) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

Promise.all([
  demoPromise()
    .then((result) => console.log("Promise 1 resolved:", result))
    .catch((error) => console.log("Promise 1 rejected:", error)),
  demoPromise()
    .then((result) => console.log("Promise 2 resolved:", result))
    .catch((error) => console.log("Promise 2 rejected:", error)),
]).finally(() => {
  console.log("All Promises are completed");
});
