function demoPromise(delaySecond) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10); // Random number từ 0 đến 9
    console.log("Random Number:", randomNumber);

    setTimeout(() => {
      if (randomNumber >= 5) {
        resolve(true);
      } else {
        reject(false);
      }
    }, delaySecond * 1000);
  });
}

Promise.all([demoPromise(2), demoPromise(3)])
  .then((results) => {
    console.log("All promises resolved in Promise.all", results);
  })
  .catch(() => {
    console.log("At least one promise was rejected in Promise.all");
  });

Promise.allSettled([demoPromise(2), demoPromise(3)]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} resolved:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected:`, result.reason);
    }
  });
  console.log("All promises completed in Promise.allSettled");
});
