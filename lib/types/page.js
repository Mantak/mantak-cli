import fs from 'fs';
import _ from 'lodash';
import { createFile, insertToFile, checkFileExists, removeFile, removeWholeLine} from '../utils';
import {logger} from '../logger';

export function generatePage(name) {
  const fileName = _.snakeCase(name);
  const componentName = _.capitalize(_.camelCase(name));

  const outputPath = `./imports/ui/front/pages/${fileName}.js`;
  if (checkFileExists(outputPath)) {
    logger.exists('vews page: ' + fileName);
    return;
  }
  createFile(`${__dirname}/../../templates/page/page.tt`, outputPath, {fileName});

  const options1 = {
    after: { regex: /import .* from .*/ig, last: true},
    asNewLine: true
  };
  const options2 = {
    before: { regex: /{\s?path: '\*', component: .*}/ig, last: true},
    asNewLine: false
  };
  const mainFilePath = './imports/ui/front/routes.js';
  logger.update(mainFilePath);
  insertToFile(mainFilePath,
    `import ${componentName} from './pages/${fileName}';`,
    options1
  );
  insertToFile(mainFilePath,
    `{ path: '${fileName}', component: ${componentName} },\n      `,
    options2
  );
}

export function destroyPage(name) {
  const fileName = _.snakeCase(name);
  const componentName = _.capitalize(_.camelCase(name));
  const filePath = `./imports/ui/front/pages/${fileName}.js`;
  if (!checkFileExists(filePath)) {
    logger.error('error: ' + filePath + ' not exist');
    return;
  }
  removeFile(filePath);
  const mainFilePath = './imports/ui/front/routes.js';
  logger.update(mainFilePath);
  let content = fs.readFileSync(mainFilePath, {encoding: 'utf-8'});
  const str1 = `import ${componentName} from './pages/${fileName}';`;
  const str2 = `{ path: '${fileName}', component: ${componentName} },`;
  content = removeWholeLine(content, str1);
  content = removeWholeLine(content, str2);
  fs.writeFileSync(mainFilePath, content);
}
