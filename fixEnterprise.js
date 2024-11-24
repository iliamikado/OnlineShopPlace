/* eslint-disable */
const fs = require('fs');
const path = require('path');

const processFile = (filePath) => {
  let data = fs.readFileSync(filePath, 'utf8');
  data = data.replace(/\??\.validateLicense\(\)/g, '')
  data = data.replace(/this\.licenseManager\.isDisplayWatermark\(\)/g, 'false');
  fs.writeFileSync(filePath, data, 'utf8'); 
};

const traverseDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (stat.isFile()) {
      processFile(fullPath);
    }
  }
};

const directoryPath = path.join(__dirname, 'node_modules', 'ag-grid-enterprise');

console.log(`Starting to process files in ${directoryPath}`);
traverseDirectory(directoryPath);
console.log('Done!');
