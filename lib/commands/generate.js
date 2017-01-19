import shelljs from 'shelljs/shell';
import {checkFileExists} from '../utils';
import {logger} from '../logger';
import {generateApi} from '../types/api';
import {generatePage} from '../types/page';
import {generateContainer} from '../types/container';

function getGenerator(type) {
  const generatorMap = {
    api: generateApi,
    page: generatePage,
    container: generateContainer,
  };
  return generatorMap[type];
}

// 简化命令， generate type name 即可
export default function generate(type, name) {
  if (!checkFileExists(`${shelljs.pwd()}/.meteor`)) {
    logger.error('You are not in a Meteor project');
    return;
  }
  if (!name) {
    logger.error('You need a file name for geterator');
    return;
  }
  const generator = getGenerator(type);
  if (!generator) {
    logger.error(`Could not find a generator for ${type}`);
    return;
  }
  generator(name);
}
