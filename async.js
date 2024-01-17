// Same async function
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
      }, 1000); // Returning promise after 1 sec
    });
  }
  
  // Using async/await to get data
  // getting the async data in synchronous way
  async function fetchDataAsync() {
    try {
      const data = await fetchData();
      console.log('Success:', data.message);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      console.log('Request completed, regardless of success or failure.');
    }
  }
  
  // Calling the  function
  fetchDataAsync();
  