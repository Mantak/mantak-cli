import _ from 'lodash';
import shelljs from 'shelljs/shell';
import {logger} from '../logger';
import {checkFileExists} from '../utils';
import {destroyApi} from '../types/api';
import {destroyPage} from '../types/page';
import {destroyContainer} from '../types/container';


function getDestroyFn(type) {
  const destroyFnMap = {
    api: destroyApi,
    page: destroyPage,
    container: destroyContainer,
  };

  return destroyFnMap[type];
}
export default function destroy(type, name) {
  if (!checkFileExists(`${shelljs.pwd()}/.meteor`)) {
    logger.error('You are not in a Meteor project');
    return;
  }
  if (_.isEmpty(name)) {
    logger.error(`Please specify a name for the ${type} to destroy:`);
    return;
  }
  const destroyFn = getDestroyFn(type);
  if (! destroyFn) {
    logger.error(`Invalid type ${type}`);
    return;
  }
  destroyFn(name);
}
