import fs from 'fs';
import pluralize from 'pluralize';
import _ from 'lodash';
import { createFile, insertToFile, checkFileExists, removeFile, removeWholeLine} from '../utils';
import {logger} from '../logger';

export function generateApi(name) {
  const snakeCaseName = _.snakeCase(name);
  const fileName = pluralize(snakeCaseName);
  const outputPath = `imports/api/${fileName}`;
  if (checkFileExists(outputPath)) {
    logger.exists('api: ' + fileName);
    return;
  }
  const camelCaseName = _.camelCase(name);
  const className = _.capitalize(pluralize.singular(camelCaseName));
  const variables = {snakeCaseName, camelCaseName, className, fileName};

  createFile(`${__dirname}/../../templates/api/collection.tt`, `imports/api/${fileName}/collection.js`, variables);
  createFile(`${__dirname}/../../templates/api/server/publications.tt`, `imports/api/${fileName}/server/publications.js`, variables);
  createFile(`${__dirname}/../../templates/api/server/methods.tt`, `imports/api/${fileName}/server/methods.js`, variables);

  const comments = `// import api ${fileName}`;
  const options = {or: [
    {after: {regex: /import .*\/api\/.*/ig, last: true},
      asNewLine: true},
    {after: {regex: /import .*/ig, last: true},
      asNewLine: true},
  ]};
  const options2 = {
    after: { regex: /\/\/ import api .*/ig, last: true},
    asNewLine: true
  };
  insertToFile('./server/main.js',
    comments,
    options
  );
  insertToFile('./server/main.js',
    `import '/imports/api/${fileName}/server/publications';`,
    options2
  );
  insertToFile('./server/main.js',
    `import '/imports/api/${fileName}/server/methods';`,
    options2
  );
}

export function destroyApi(name) {
  const snakeCaseName = _.snakeCase(name);
  const fileName = pluralize(snakeCaseName);
  const filePath = `./imports/api/${fileName}`;
  if (!checkFileExists(filePath)) {
    logger.error('error: ' + fileName + 'not exist');
    return;
  }
  removeFile(filePath);
  const mainFilePath = './server/main.js';
  logger.update(mainFilePath);
  let content = fs.readFileSync(mainFilePath, {encoding: 'utf-8'});
  content = removeWholeLine(content, `// import api ${fileName}`);
  content = removeWholeLine(content, `import '/imports/api/${fileName}/server/methods';`);
  content = removeWholeLine(content, `import '/imports/api/${fileName}/server/publications';`);
  fs.writeFileSync(mainFilePath, content);
}
