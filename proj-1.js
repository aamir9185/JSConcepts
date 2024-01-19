document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    const title = document.createElement("h1");
    title.textContent = "Promise Project";
    container.appendChild(title);

    const loadDataBtn = document.createElement("button");
    loadDataBtn.textContent = "Load Data";
    container.appendChild(loadDataBtn);

    const dataContainer = document.createElement("div");
    dataContainer.id = "dataContainer";
    container.appendChild(dataContainer);

    loadDataBtn.addEventListener("click", function () {
        fetchData()
            .then(data => {
                // Display the data
                displayData(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                dataContainer.innerHTML = 'Error loading data.';
            });
    });

    function fetchData() {
        // Return a promise to fetch data from JSONPlaceholder
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    function displayData(data) {
        // Create a list of posts
        const list = document.createElement('ul');
        data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = `${post.id}. ${post.title}`;
            list.appendChild(listItem);
        });
        dataContainer.innerHTML = '';
        dataContainer.appendChild(list);
    }
});
