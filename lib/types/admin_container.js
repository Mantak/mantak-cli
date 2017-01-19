import _ from 'lodash';
import { createFile,  checkFileExists, removeFile} from '../utils';
import {logger} from '../logger';

export function generateContainer(name) {
  let filePath;
  let containerPath;
  let componentPath;
  if (name.indexOf(':') > 0) {
    const moduleName = name.split(':')[0];
    const fileName = name.split(':')[1];
    const snakeCasePath = _.snakeCase(moduleName);
    const snakeCaseName = _.snakeCase(fileName);
    containerPath = `imports/ui/admin/containers/${snakeCasePath}/${snakeCaseName}.js`;
    componentPath = `imports/ui/admin/components/${snakeCasePath}/${snakeCaseName}.js`;
    filePath = `../../components/${snakeCasePath}/${snakeCaseName}`;
  } else {
    const snakeCaseName = _.snakeCase(name);
    containerPath = `./imports/ui/admin/containers/${snakeCaseName}.js`;
    componentPath = `./imports/ui/admin/components/${snakeCaseName}.js`;
    filePath = `../components/${snakeCaseName}`;
  }
  if (checkFileExists(containerPath)) {
    logger.exists('container: ' + containerPath);
    return;
  }
  if (checkFileExists(componentPath)) {
    logger.exists('component: ' + componentPath);
    return;
  }
  const variables = {filePath};
  createFile(`${__dirname}/../../templates/container/container.tt`, containerPath, variables);
  createFile(`${__dirname}/../../templates/container/component.tt`, componentPath);
}

export function destroyContainer(name) {
  let containerPath;
  let componentPath;
  if (name.indexOf(':') > 0) {
    const moduleName = name.split(':')[0];
    const fileName = name.split(':')[1];
    const snakeCasePath = _.snakeCase(moduleName);
    const snakeCaseName = _.snakeCase(fileName);
    containerPath = `imports/ui/admin/containers/${snakeCasePath}/${snakeCaseName}.js`;
    componentPath = `imports/ui/admin/components/${snakeCasePath}/${snakeCaseName}.js`;
  } else {
    const snakeCaseName = _.snakeCase(name);
    containerPath = `./imports/ui/admin/containers/${snakeCaseName}.js`;
    componentPath = `./imports/ui/admin/components/${snakeCaseName}.js`;
  }
  if (!checkFileExists(containerPath)) {
    logger.error('container ' + containerPath + ' not exist');
    return;
  }
  if (!checkFileExists(componentPath)) {
    logger.error('component ' + componentPath + ' not exist');
  }
  removeFile(containerPath);
  removeFile(componentPath);
}
