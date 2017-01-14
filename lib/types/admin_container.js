import _ from 'lodash';
import { createFile,  checkFileExists, removeFile} from '../utils';
import {logger} from '../logger';

export function generateAdminContainer(name) {
  const snakeCaseName = _.snakeCase(name);
  const containerPath = `imports/ui/admin/containers/${snakeCaseName}.js`;
  const componentPath = `imports/ui/admin/components/${snakeCaseName}.js`;
  if (checkFileExists(containerPath)) {
    logger.exists('container: ' + containerPath);
    return;
  }
  if (checkFileExists(componentPath)) {
    logger.exists('component: ' + containerPath);
    return;
  }
  const variables = {snakeCaseName};
  createFile(`${__dirname}/../../templates/container/container.tt`, containerPath, variables);
  createFile(`${__dirname}/../../templates/container/component.tt`, componentPath);
}

export function destroyAdminContainer(name) {
  const snakeCaseName = _.snakeCase(name);
  const containerPath = `./imports/ui/admin/containers/${snakeCaseName}.js`;
  const componentPath = `./imports/ui/admin/components/${snakeCaseName}.js`;
  if (!checkFileExists(containerPath)) {
    logger.error('container' + containerPath + 'not exist');
    return;
  }
  if (!checkFileExists(componentPath)) {
    logger.error('component' + componentPath + 'not exist');
  }
  removeFile(containerPath);
  removeFile(componentPath);
}
