document.addEventListener('DOMContentLoaded', async () => {
    try {
      const data = await fetchData();
      displayData(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });
  
  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  }
  
  function displayData(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h2>Data Fetched:</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  }
  