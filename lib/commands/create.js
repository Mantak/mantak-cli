import shelljs from 'shelljs/shell';
import {logger} from '../logger';
import {checkFileExists, createDir} from '../utils';
export default function create(appPath) {
  if (checkFileExists(`${shelljs.pwd()}/.meteor`)) {
    logger.error('You are already in a Meteor project');
    return;
  }
  if (checkFileExists(appPath)) {
    logger.error(`There's aready a folder named ${appPath}`);
    return;
  }
  if (!appPath) {
    logger.error('Please supply the path of project');
    return;
  }
  createDir(`${appPath}`);
  shelljs.set('-e');
  const currentPath = shelljs.pwd();
  shelljs.exec(`meteor create ${appPath}`, {silent: true});
  shelljs.cd(appPath);
  shelljs.rm('-rf', ['client', 'server']);
  shelljs.rm('package.json');
  shelljs.sed('-i',  'autopublish', '#autopublish', '.meteor/packages');
  shelljs.sed('-i',  'insecure', '#insecure', '.meteor/packages');
  const lineBreak = '\n';
  `react-meteor-data${lineBreak}`.toEnd('.meteor/packages');
  `meteorhacks:ssr${lineBreak}`.toEnd('.meteor/packages');
  `msavin:mongol${lineBreak}`.toEnd('.meteor/packages');
  `service-configuration${lineBreak}`.toEnd('.meteor/packages');
  `accounts-base${lineBreak}`.toEnd('.meteor/packages');
  `accounts-password${lineBreak}`.toEnd('.meteor/packages');
  `email${lineBreak}`.toEnd('.meteor/packages');
  `alanning:roles${lineBreak}`.toEnd('.meteor/packages');
  `fourseven:scss${lineBreak}`.toEnd('.meteor/packages');
  `jagi:astronomy${lineBreak}`.toEnd('.meteor/packages');
  `meteorhacks:async${lineBreak}`.toEnd('.meteor/packages');
  `meteorhacks:subs-manager${lineBreak}`.toEnd('.meteor/packages');
  `ostrio:cstorage${lineBreak}`.toEnd('.meteor/packages');
  `tmeasday:publish-counts${lineBreak}`.toEnd('.meteor/packages');
  `mrt:smart-publish${lineBreak}`.toEnd('.meteor/packages');
  shelljs.cd(currentPath);
  shelljs.cp('-R', `${__dirname}/../../boilerplates/`,  `${appPath}`);
  logger.info(`  cd ${appPath} && meteor npm install --save bcrypt && npm i && npm start`);
}
