document.addEventListener("DOMContentLoaded", function(){
    const profileName = document.getElementById("profile-name");
    const profileEmail = document.getElementById("profile-email");
    const profilePhone = document.getElementById("profile-phone");

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){
        profileName.textContent = currentUser.username;
        profileEmail.textContent = currentUser.email;
        profilePhone.textContent = currentUser.phone;
    }
    else{
        alert("No user is logged in... Redirecting to login...");
        window.location.href="login.html" ;
    }
});

document.addEventListener("DOMContentLoaded",function(){

    const profileImage = document.getElementById("profile-img");
    const imageUpload = document.getElementById("imageUpload");
    const saveImageBtn = document.getElementById("saveImage");

    // Load stored profile image

    const storedImage = localStorage.getItem("profileImage");

    if(storedImage){
        profileImage.src = storedImage ;
    }

    // Event Listener for Image Upload
    saveImageBtn.addEventListener("click", function () {
        const file = imageUpload.files[0];

        if (file) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                const currentTime = new Date().toLocaleString();

                // Save image and timestamp in localStorage
                localStorage.setItem("profileImage", e.target.result);
                localStorage.setItem("imageTimestamp", currentTime);

                // Update UI
                profileImg.src = e.target.result;
                timestampText.textContent = "Last Updated: " + currentTime;
            };

            reader.readAsDataURL(file);
        } else {
            alert("Please select an image first!");
        }
    });
});