import {green, red} from 'colors';

export const logger = {
  error(msg) {
    console.log(red(`  error  `) + msg);
  },
  create(msg) {
    console.log(green(`  create  `) + msg);
  },
  exists(msg) {
    console.log(red(`  exists  `) + msg);
  },
  run(msg) {
    console.log(green(`  run  `) + msg);
  },
  update(msg) {
    console.log(red(`  update  `) + msg);
  },
  remove(msg) {
    console.log(red(`  remove  `) + msg);
  }
};
