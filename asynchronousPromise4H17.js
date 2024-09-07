function demoPromise() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum >= 5) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

const promises = Array(20)
  .fill(null)
  .map(() => demoPromise());

async function handlePromises() {
  for (const promise of promises) {
    try {
      const result = await promise;
      console.log("Resolved:", result);
    } catch (error) {
      console.log("Rejected:", error);
    }
  }
}

handlePromises();
