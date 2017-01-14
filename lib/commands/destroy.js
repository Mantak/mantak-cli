import _ from 'lodash';
import {destroyApi} from '../types/api';
import {destroyPage} from '../types/page';
import {destroyContainer} from '../types/container';
import {destroyAdminPage} from '../types/admin_page';
import {destroyAdminContainer} from '../types/admin_container';


function getDestroyFn(type) {
  const destroyFnMap = {
    api: destroyApi,
    page: destroyPage,
    container: destroyContainer,
    adminPage: destroyAdminPage,
    adminContainer: destroyAdminContainer,
  };

  return destroyFnMap[type];
}
export default function destroy(type, name) {
  if(_.isEmpty(name)) {
    console.log(`Please specify a name for the ${type} to destroy:`);
    return;
  }
  let destroyFn = getDestroyFn(type);
  if (! destroyFn) {
    console.log(`Invalid type ${type}`);
    return;
  }
  destroyFn(name);
}
