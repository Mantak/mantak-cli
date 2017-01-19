import fs from 'fs';
import _ from 'lodash';
import { createFile, insertToFile, checkFileExists, removeFile, removeWholeLine} from '../utils';
import {logger} from '../logger';

export function generatePage(userInput) {
  let folder = 'front';
  let name = userInput;
  let routeReg = {};
  let routeLine = '';
  if (name.indexOf('@') > 0) {
    folder = name.split('@')[1];
    name = name.split('@')[0];
  }
  const fileName = _.snakeCase(name);
  const componentName = _.capitalize(_.camelCase(name));
  const outputPath = `./imports/ui/${folder}/pages/${fileName}.js`;
  if (checkFileExists(outputPath)) {
    logger.exists('vews page: ' + fileName);
    return;
  }
  // 创建文件
  createFile(`${__dirname}/../../templates/page/page.tt`, outputPath, {fileName});
  // 添加import
  const mainFilePath = `./imports/ui/${folder}/routes.js`;
  const importReg = {
    after: { regex: /import .* from .*/ig, last: true},
    asNewLine: true
  };
  const importLine = `import ${componentName} from './pages/${fileName}';`;

  switch (folder) {
    case 'front' :
      routeReg = {
        after: { regex: /{\s?path: .*, component: .*},/ig, last: true},
        asNewLine: true
      };
      routeLine = `      { path: '${fileName}', component: ${componentName} },`;
      break;
    case 'admin' :
      routeReg = {
        after: { regex: /{\s?path: .*, component: .*},/ig, last: true},
        asNewLine: true
      };
      routeLine = `      { path: '${fileName}', component: ${componentName} },`;
      break;
    case 'commons' :
      routeReg = {
        before: { regex: /{\s?path: '\*', component: .*}/ig, last: true},
        asNewLine: false
      };
      routeLine = `{ path: '${fileName}', component: ${componentName} },\n  `;
      break;
    default :
      logger.error('error: ' + folder + ' not exist');
  }
  logger.update(mainFilePath);
  insertToFile(mainFilePath,
    importLine,
    importReg
  );
  insertToFile(mainFilePath,
    routeLine,
    routeReg
  );
}

export function destroyPage(userInput) {
  let folder = 'front';
  let name = userInput;
  if (name.indexOf('@') > 0) {
    folder = name.split('@')[1];
    name = name.split('@')[0];
  }
  const fileName = _.snakeCase(name);
  const componentName = _.capitalize(_.camelCase(name));
  const filePath = `./imports/ui/${folder}/pages/${fileName}.js`;
  if (!checkFileExists(filePath)) {
    logger.error('error: ' + filePath + ' not exist');
    return;
  }
  removeFile(filePath);
  const mainFilePath = `./imports/ui/${folder}/routes.js`;
  logger.update(mainFilePath);
  let content = fs.readFileSync(mainFilePath, {encoding: 'utf-8'});
  const importLine = `import ${componentName} from './pages/${fileName}';`;
  const routeLine = `{ path: '${fileName}', component: ${componentName} },`;
  content = removeWholeLine(content, importLine);
  content = removeWholeLine(content, routeLine);
  fs.writeFileSync(mainFilePath, content);
}
