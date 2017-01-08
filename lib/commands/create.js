import path from 'path';
import shelljs from 'shelljs/shell';
import {checkFileExists, createDir, getLineBreak} from '../utils';
export default function create(appPath) {
  if (checkFileExists(`${shelljs.pwd()}/.meteor`)) {
    console.log('You are already in a Meteor project');
    return;
  }
  if (!appPath) {
    console.log('Please supply the path of project');
    return;
  }
  const lineBreak = getLineBreak();
  let appName = path.basename(appPath).replace(/\..*$/, '');
  createDir(`${appPath}`);
  shelljs.set('-e');
  let currentPath = shelljs.pwd();
  shelljs.exec(`meteor create ${appPath}`, {silent: true});
  shelljs.cd(appPath);
  shelljs.rm('-rf', ['client', 'server']);
  shelljs.rm('package.json');
  shelljs.sed('-i',  'autopublish', '#autopublish', '.meteor/packages');
  shelljs.sed('-i',  'insecure', '#insecure', '.meteor/packages');
  `react-meteor-data${lineBreak}`.toEnd('.meteor/packages');
  `accounts-base${lineBreak}`.toEnd('.meteor/packages');
  `accounts-password${lineBreak}`.toEnd('.meteor/packages');
  `alanning:roles${lineBreak}`.toEnd('.meteor/packages');
  `msavin:mongol${lineBreak}`.toEnd('.meteor/packages');
  `kadira:dochead${lineBreak}`.toEnd('.meteor/packages');
  `ostrio:files${lineBreak}`.toEnd('.meteor/packages');
  `jagi:astronomy${lineBreak}`.toEnd('.meteor/packages');
  `meteorhacks:subs-manager${lineBreak}`.toEnd('.meteor/packages');
  `less${lineBreak}`.toEnd('.meteor/packages');
  shelljs.cd(currentPath);
  shelljs.cp('-R', `${__dirname}/../../boilerplates/`,  `${appPath}`);
  console.log(`  cd ${appPath}`);
  console.log(`  npm i`);
  console.log(`  npm start`);
}
