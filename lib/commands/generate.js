import {generateApi} from '../types/api';
import {generatePage} from '../types/page';
import {generateAdminPage} from '../types/admin_page';

function getGenerator(type) {
  const generatorMap = {
    api: generateApi,
    page: generatePage,
    adminPage: generateAdminPage,
  };
  return generatorMap[type];
}

// 简化命令， generate type name 即可
export default function generate(type, name) {
  const generator = getGenerator(type);
  if (!generator) {
    console.log(`Could not find a generator for ${type}`);
    return;
  }
  generator(name);
}
