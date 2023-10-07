document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        // e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const website = document.getElementById("website").value;
        const message = document.getElementById("message").value;

        // Check if name and message are not empty
        if (name.trim() === "" || message.trim() === "") {
            result.innerHTML = "Name and message are required fields.";
            return;
        }

        // Check for a valid email address
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            result.innerHTML = "Please enter a valid email address.";
            return;
        }

        // Check for a valid URL
        const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
        if (!urlPattern.test(website)) {
            result.innerHTML = "Please enter a valid URL.";
            return;
        }

        // If all validations pass, you can submit the form here
        // For this example, we'll just display a success message
        result.innerHTML = "Form submitted successfully!";
    });
});
