import myCollection from "./collection.js";

  function describeItem(item) {
    if (item.count === 1) {
        console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}.`);
    } else {
        console.log(`I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}`);
    }
  }

// describeItem(myCollection[0]);
// Now make a function called `describeCollection` that takes in an array as a parameter. The function should loop through the array, 

// and for each item, it should call the `describeItem` function so it displays a message according to how many you have 
// in your collection.

// Call your function below where you've defined it, handing in the `myCollection` array.

// Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. 
    
//     each object in your `myCollection` array).

function describeCollection (array){
    array.forEach(function (item){
        describeItem(item)
    })
}

describeCollection(myCollection)