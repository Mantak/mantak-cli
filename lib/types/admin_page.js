import fs from 'fs';
import _ from 'lodash';
import { createFile, insertToFile, checkFileExists, removeFile, removeWholeLine} from '../utils';
import {logger} from '../logger';

export function generateAdminPage(name) {
  const fileName = _.snakeCase(name);
  const componentName = _.capitalize(_.camelCase(name));

  const outputPath = `imports/ui/admin/pages/${fileName}.js;`;
  if (checkFileExists(outputPath)) {
    logger.exists('vews page: ' + fileName);
    return;
  }
  createFile(`${__dirname}/../../templates/page/page.tt`, `imports/ui/admin/pages/${fileName}.js`, {fileName});

  const options1 = {
    after: { regex: /import .* from .*/ig, last: true},
    asNewLine: true
  };
  const options2 = {
    after: { regex: /{\s?path: .*, component: .*},/ig, last: true},
    asNewLine: true
  };
  const mainFilePath = './imports/ui/admin/routes.js';
  logger.update(mainFilePath);
  insertToFile(mainFilePath,
    `import ${componentName} from './pages/${fileName}';`,
    options1
  );
  insertToFile(mainFilePath,
    `      { path: '${fileName}', component: ${componentName} },`,
    options2
  );
}

export function destroyAdminPage(name) {
  const fileName = _.snakeCase(name);
  const componentName = _.capitalize(_.camelCase(name));
  const filePath = `./imports/ui/admin/pages/${fileName}.js`;
  if (!checkFileExists(filePath)) {
    logger.error('error: ' + fileName + 'not exist');
    return;
  }
  removeFile(filePath);
  const mainFilePath = './imports/ui/admin/routes.js';
  logger.update(mainFilePath);
  let content = fs.readFileSync(mainFilePath, {encoding: 'utf-8'});
  const str1 = `import ${componentName} from './pages/${fileName}';`;
  const str2 = `{ path: '${fileName}', component: ${componentName} },`;
  content = removeWholeLine(content, str1);
  content = removeWholeLine(content, str2);
  fs.writeFileSync(mainFilePath, content);
}
