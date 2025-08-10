const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/environments/build-info.ts');

const content = `export const buildInfo = {
  buildDate: '${new Date().toISOString()}'
};
`;

fs.writeFileSync(filePath, content);
console.log('Build date updated in build-info.ts');
