const fs = require("fs");
const path = require("path");

// Folder path to save and read files
const folderPath = path.join(__dirname, "my-data");

// List of file names
const fileNames = [
  "Gooup1_User_Tracking_121220230405.txt",
  "Gooup1_User_Tracking_290220230405.txt",
  "Gooup1_User_Tracking_29022023040506.txt",
  "Gooup1_User_Tracking_290220230450.txt",
  "Gooup1_User_Tracking_290220234050.txt",
  "Gooup1_User_Tracking_290220234050.txt",
  "Gooup1_User_Tracking_290020232323.txt",
  "Gooup1_UserTracking_290020232323.txt",
  "Gooup1_User_Tracking_291220232323.txts",
];

// Regular expression to match the format Gooup1_User_Tracking_DDMMYYYYHHMM.txt
const filePattern = /^Gooup1_User_Tracking_(\d{12})\.txt$/;

// Function to create files with content as file name
function createFiles() {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath); // Create directory if it doesn't exist
  }

  fileNames.forEach((fileName) => {
    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, fileName); // Write file with its name as content
    console.log(`File ${fileName} created with content: "${fileName}".`);
  });
}

// Function to process the files in the folder
function processFiles() {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const match = file.match(filePattern);
      if (match) {
        const filePath = path.join(folderPath, file);

        // Read file content
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            console.error(`Error reading file ${file}:`, err);
            return;
          }

          // Append '-OK' to the content
          const newContent = data + "-OK";

          // Write back the new content
          fs.writeFile(filePath, newContent, (err) => {
            if (err) {
              console.error(`Error writing file ${file}:`, err);
            } else {
              console.log(`File ${file} processed and updated with -OK.`);
            }
          });
        });
      } else {
        console.log(`File ${file} does not match the expected format.`);
      }
    });
  });
}

// First, create files
createFiles();

// Then, process them
processFiles();
