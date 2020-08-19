// JavaScript Promises

A Promise in short:

Think like a promise in real life, when you do it you'll have only 2 ways to solve a promise, it will happens or it will not, this same concepts applies on the promises in JavaScript.

Promises are used to handle asynchronous operations in JavaScript

A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation completed successfully.
    rejected: meaning that the operation failed.

- When the promise is in a pending state, it is not yet executed, is waiting for an event that comes from our code, when this will happens than our promise will be resolved or rejected and will not come back in a pending status;

- When the promise is fullfilled, it means that the conditions of the promise where completely sollved and we will have a positive return of our promise;

- When the promise is rejected we will catch the negative answer of our promise;

HINT: The promise works in a similar way of the if...else.... statement;

-----------------------------------------------------

The Promise is written in this way:

    new Promise(function (resolve, reject) { ... } );

It start with a "new" declaration and the word "Promise", inside it will contain two parameters that will be our resolution of the Promise:

    - resolve(): if the promise will be positive, then our code will resolve it;
    - reject(): if the promise will be negative, then our code will reject it;

-----------------------------------------------------

The JS Promise will set a resolve and reject 'code', when we will execute it, we can call it with .then and .catch method, in addition is possible to add a ,finally method that will return some code in both cases:
    
    - promise.then(), Will catch the promise resolve method that we setted when we wrote our Promise
    - promise.catch(), Will catch the promise reject method;
    - promise.finally() Will return a final code, even if the the promise will be resolved or rejected;

-----------------------------------------------------

The promise can be executed in a chain of different conditions.

    const myPromise =
      (new Promise(myExecutorFunc))
      .then(handleFulfilledA)
      .then(handleFulfilledB)
      .then(handleFulfilledC)
      .catch(handleRejectedAny);