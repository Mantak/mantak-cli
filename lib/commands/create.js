import shelljs from 'shelljs/shell';
import {checkFileExists, createDir} from '../utils';
export default function create(appPath) {
  if (checkFileExists(`${shelljs.pwd()}/.meteor`)) {
    console.log('You are already in a Meteor project');
    return;
  }
  if (!appPath) {
    console.log('Please supply the path of project');
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
  `less${lineBreak}`.toEnd('.meteor/packages');
  `kadira:dochead${lineBreak}`.toEnd('.meteor/packages');
  `jagi:astronomy${lineBreak}`.toEnd('.meteor/packages');
  `meteorhacks:async${lineBreak}`.toEnd('.meteor/packages');
  `meteorhacks:subs-manager${lineBreak}`.toEnd('.meteor/packages');
  shelljs.cd(currentPath);
  shelljs.cp('-R', `${__dirname}/../../boilerplates/`,  `${appPath}`);
  console.log(`  cd ${appPath} && meteor npm install --save bcrypt && npm i && npm start`);
}
