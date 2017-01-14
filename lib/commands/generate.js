import {logger} from '../logger';
import {generateApi} from '../types/api';
import {generatePage} from '../types/page';
import {generateAdminPage} from '../types/admin_page';
import {generateContainer} from '../types/container';
import {generateAdminContainer} from '../types/admin_container';

function getGenerator(type) {
  const generatorMap = {
    api: generateApi,
    page: generatePage,
    container: generateContainer,
    adminPage: generateAdminPage,
    adminContainer: generateAdminContainer,
  };
  return generatorMap[type];
}

// 简化命令， generate type name 即可
export default function generate(type, name) {
  const generator = getGenerator(type);
  if (!generator) {
    logger.error(`Could not find a generator for ${type}`);
    return;
  }
  generator(name);
}
