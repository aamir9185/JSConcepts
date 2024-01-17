// Making a function that returns a promise 
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.8; // 80% chance of success
  
        if (success) {
          const data = { message: 'Data successfully fetched!' };
          resolve(data);
        } else {
          reject(new Error('Failed to fetch data.'));
        }
      }, 5000);  // returning promise after delay 
    });
  }
  // Consuming the promise
  fetchData()
    .then((data) => {  // This will run when the promise is fullfilled
      console.log('Success:', data.message);
    })
    .catch((error) => {  // This will run when promise is rejcted
      console.error('Error:', error.message);
    })
    .finally(() => {   // this will regardless of reject or resolve
      console.log('Request completed, regardless of success or failure.');
    });
  