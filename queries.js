document.addEventListener("DOMContentLoaded", function () {
    const queryForm = document.getElementById("queryForm");
    const queryList = document.getElementById("queryList");

    // Load existing queries from localStorage
    function loadQueries() {
        const storedQueries = JSON.parse(localStorage.getItem("queries")) || [];
        queryList.innerHTML = ""; // Clear the list

        storedQueries.forEach(query => {
            const li = document.createElement("li");
            li.textContent = `📩 ${query.name} | ${query.email} | ${query.subject} - ${query.message}`;
            queryList.appendChild(li);
        });
    }

    // Handle form submission
    queryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields!");
            return;
        }

        const queryData = { name, email, subject, message };

        // Store in localStorage
        const storedQueries = JSON.parse(localStorage.getItem("queries")) || [];
        storedQueries.push(queryData);
        localStorage.setItem("queries", JSON.stringify(storedQueries));

        alert("Query submitted successfully!");
        queryForm.reset(); // Clear form

        loadQueries(); // Refresh query list
    });

    loadQueries(); // Load stored queries when the page loads
});
