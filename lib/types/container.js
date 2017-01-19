import _ from 'lodash';
import { createFile,  checkFileExists, removeFile} from '../utils';
import {logger} from '../logger';

export function generateContainer(userInput) {
  let name = userInput;
  let filePath;
  let containerPath;
  let componentPath;
  let folder = 'front';
  if (name.indexOf('@') > 0) {
    folder = name.split('@')[1];
    name = name.split('@')[0];
  }
  if (name.indexOf(':') > 0) {
    const moduleName = name.split(':')[0];
    const fileName = name.split(':')[1];
    const snakeCasePath = _.snakeCase(moduleName);
    const snakeCaseName = _.snakeCase(fileName);
    containerPath = `imports/ui/${folder}/containers/${snakeCasePath}/${snakeCaseName}.js`;
    componentPath = `imports/ui/${folder}/components/${snakeCasePath}/${snakeCaseName}.js`;
    filePath = `../../components/${snakeCasePath}/${snakeCaseName}`;
  } else {
    const snakeCaseName = _.snakeCase(name);
    containerPath = `./imports/ui/${folder}/containers/${snakeCaseName}.js`;
    componentPath = `./imports/ui/${folder}/components/${snakeCaseName}.js`;
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

export function destroyContainer(userInput) {
  let name = userInput;
  let folder = 'front';
  let containerPath;
  let componentPath;
  if (name.indexOf('@') > 0) {
    folder = name.split('@')[1];
    name = name.split('@')[0];
  }
  if (name.indexOf(':') > 0) {
    const moduleName = name.split(':')[0];
    const fileName = name.split(':')[1];
    const snakeCasePath = _.snakeCase(moduleName);
    const snakeCaseName = _.snakeCase(fileName);
    containerPath = `imports/ui/${folder}/containers/${snakeCasePath}/${snakeCaseName}.js`;
    componentPath = `imports/ui/${folder}/components/${snakeCasePath}/${snakeCaseName}.js`;
  } else {
    const snakeCaseName = _.snakeCase(name);
    containerPath = `./imports/ui/${folder}/containers/${snakeCaseName}.js`;
    componentPath = `./imports/ui/${folder}/components/${snakeCaseName}.js`;
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
