document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading

        const enteredUserName = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;

        // Retrieve stored user data
        const storedUserData = localStorage.getItem("userData");

        if (!storedUserData) {
            alert("No user found! Please sign up first.");
            return;
        }

        const userData = JSON.parse(storedUserData);

        // Check if credentials match
        if (enteredUserName === userData.username && enteredPassword === userData.password) {
            alert("Login Successful!");
            localStorage.setItem("currentUser", JSON.stringify(userData));
            window.location.href = "home.html"; // Redirect to dashboard
        } else {
            alert("Incorrect Email or Password!");
        }
    });
});
