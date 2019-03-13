'use strict';

const fs = require('fs-extra');
const pathToJSONFile = 'dist/package.json';
const NGX_BOOTSRAP_CI = 'ngx-bootstrap-ci';

updatePkg();

async function updatePkg() {
  const packageJson = JSON.parse(fs.readFileSync(pathToJSONFile), 'utf8');

  packageJson.name = NGX_BOOTSRAP_CI;

  fs.writeFile(pathToJSONFile, JSON.stringify(packageJson, null, 2));

  console.log(`Package.json was updated`);
}
