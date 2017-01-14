import _ from 'lodash';
import { createFile,  checkFileExists, removeFile} from '../utils';
import {logger} from '../logger';

export function generateContainer(moduleName, name) {
  const snakeCaseName = _.snakeCase(name);
  const containerPath = `imports/ui/front/${moduleName}containers/${snakeCaseName}.js`;
  const componentPath = `imports/ui/front/${moduleName}components/${snakeCaseName}.js`;

  if (checkFileExists(containerPath) || checkFileExists(componentPath)) {
    logger.exists('container or component: ' + fileName);
    return;
  }
  const variables = {fileName: snakeCaseName};
  createFile(`${__dirname}/../../templates/container/container.tt`, containerPath, variables);
  createFile(`${__dirname}/../../templates/container/component.tt`, componentPath);
}

export function destroyContainer(moduleName, name) {
  const snakeCaseName = _.snakeCase(name);
  const containerPath = `imports/ui/front/${moduleName}containers/${snakeCaseName}.js`;
  const componentPath = `imports/ui/front/${moduleName}components/${snakeCaseName}.js`;
  if (!checkFileExists(containerPath)) {
    logger.error('container' + fileName + 'not exist');
    return;
  }
  if (!checkFileExists(componentPath)) {
    logger.error('component' + fileName + 'not exist');
  }
  removeFile(containerPath);
  removeFile(componentPath);
}
