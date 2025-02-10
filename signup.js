document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("Number").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value;

        // Validate passwords
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Store user data in localStorage
        const userData = {
            username: username,
            email: email,
            phone: phone,
            password: password
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Signup Successful! Redirecting to Login Page.");
        window.location.href = "login.html"; // Redirect to login page
    });
});
