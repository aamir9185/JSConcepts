/*Debouncing ensures that a function is not executed until after a certain amount of time has passed since the last time the function was invoked. It's useful when you want to delay the execution of a function until after the user has stopped performing a certain action. */

const debouncedFunction = debounce(() => {
    console.log('Function executed after 500ms of inactivity');
}, 500);

// Call debounced function repeatedly
setInterval(() => {
    debouncedFunction();
}, 100);
