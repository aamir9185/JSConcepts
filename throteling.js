/*Throttling limits the rate at which a function is executed. It ensures that a function is called at most once in a specified time interval. It's useful when you want to prevent a function from being called more frequently than a certain rate.*/


// Usage example
const throttledFunction = throttle(() => {
    console.log('Function executed at most once every 500ms');
}, 500);

// Call throttled function repeatedly
setInterval(() => {
    throttledFunction();
}, 100);
