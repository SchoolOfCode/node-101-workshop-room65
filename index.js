import chalk from 'chalk';

import myCollection from './collection.js';



  function describeItem(item) {
    if (item.count === 1) {
        console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}.`);
    } else {
        console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}s. Here's what I like about them: ${chalk.green(item.whatILike)}`);
    }
  }


function describeCollection (array){
    array.forEach(function (item){
        describeItem(item)
    })
}

describeCollection(myCollection)