
export * from './lib/serviceCreator';

/* scripts */
import { startServiceLocator } from './lib/serviceLocator';
import { test } from './scripts/test';
import * as  program from 'commander';

export {startServiceLocator}

program
    .version('1.0.0')
    .option('-t, --test <dir>', 'Run tests on selected dir')
    .option('-s, --service-locator ','Run service locator')
    .parse(process.argv);


if (program['test']) {
    console.info('test runner mode');
    test(program['test']);
} else if(program['serviceLocator']) {
    console.info('service-locator mode');
    startServiceLocator();
}