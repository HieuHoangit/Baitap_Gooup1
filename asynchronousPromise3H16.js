const fs = require("fs");
const path = require("path");

const createFiles = () => {
  const filesDir = "./files/";
  if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
  }

  for (let i = 1; i <= 10; i++) {
    const filename = path.join(filesDir, `file${i}.json`);
    if (i <= 5) {
      const validJson = { id: i, name: `File${i}` };
      fs.writeFileSync(filename, JSON.stringify(validJson));
    } else {
      const invalidContent = Math.random().toString(36).substring(7);
      fs.writeFileSync(filename, invalidContent);
    }
  }
};

const processFiles = () => {
  const filesDir = "./files/";
  const resultFile = "./result.txt";

  if (fs.existsSync(resultFile)) {
    fs.unlinkSync(resultFile);
  }

  const files = fs.readdirSync(filesDir);
  files.forEach((file) => {
    const filePath = path.join(filesDir, file);
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const jsonObject = JSON.parse(content);
      console.log(`${file} is valid JSON:`, jsonObject);

      fs.appendFileSync(resultFile, `${file}\nOK\n`);
    } catch (error) {
      console.log(`${file} is not valid JSON:`, error.message);

      fs.appendFileSync(resultFile, `${file}\nNOK\n`);
    } finally {
      console.log(`Finished processing ${file}`);
    }
  });
};

createFiles();
processFiles();
