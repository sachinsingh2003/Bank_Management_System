document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!"); // Debugging log

    const form = document.querySelector("form");

    if (!form) {
        console.error("Form not found! Check your HTML.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Submit button clicked!"); // Debugging log

        const oldPassword = document.querySelector("input[placeholder='Old Password']").value;
        const newPassword = document.querySelector("input[placeholder='New Password']").value;
        const confirmPassword = document.querySelector("input[placeholder='Confirm New Password']").value;

        // Get stored user data from localStorage
        const storedData = localStorage.getItem("userData");

        if (!storedData) {
            alert("No user found! Please sign up first.");
            return;
        }

        const userData = JSON.parse(storedData); // Parse JSON data from localStorage

        // Check if the old password matches the stored password
        if (oldPassword !== userData.password) {
            alert("Incorrect Old Password!");
            return;
        }

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        // Update password in localStorage
        userData.password = newPassword;
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Password Updated Successfully!");

        // Redirect to login page
        window.location.href = "login.html";
    });
});
