import program from 'commander';
import pkg from '../package.json';
import {create, generate, destroy} from './commands';

program
  .version(pkg.version);

program
  .command('create [appPath]')
  .alias('c')
  .action(function(appPath) {
    create(appPath);
  });

program
  .command('generate [type] [name]')
  .alias('g')
  .action(function(type, name) {
    generate(type, name);
  });

program
  .command('destroy [type] [name]')
  .alias('d')
  .action(function(type, name) {
    destroy(type, name);
  });

program.parse(process.argv);
