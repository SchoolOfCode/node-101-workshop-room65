import chalk from 'chalk';

import myCollection from './collection.js';

import toSnakeCase from 'to-snake-case';

  function describeItem(item) {
    if (item.count === 1) {
        console.log(toSnakeCase(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}.`));
    } else {
        console.log(`I have ${chalk.yellow.bold(item.count)} ${chalk.cyan.underline(item.name)}s. Here's what I like about them: ${chalk.green(item.whatILike)}`);
    }
  }


function describeCollection (array){
    array.forEach(function (item){
        describeItem(item)
    })
}

describeCollection(myCollection)