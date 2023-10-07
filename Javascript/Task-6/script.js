// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contactForm");
//     const result = document.getElementById("result");


//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const username = document.getElementById("name").value;
//         const password = document.getElementById("Passwd").value;

//         if (username.trim() === ""){
//             result.innerHTML("Username is required");
//             return;
//         }
//         if(password.trim() === ""){
//             result.innerHTML("Password is required");
//             return;
//         }
//         result.innerHTML = "Form submitted successfully!";
//     })
// })
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
        if (name.trim() === "") {
            result.innerHTML = "Name and message are required fields.";
            return;
        }

        // If all validations pass, you can submit the form here
        // For this example, we'll just display a success message
        result.innerHTML = "Form submitted successfully!";
    });
});
