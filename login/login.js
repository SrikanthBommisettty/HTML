// Function to verify username and password
function verify() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "India@123") {
        alert("Authentication successful!");
        window.location.href = "http://127.0.0.1:5500/veg.html";
    } else {
        alert("Authentication failed. Please check your credentials.");
    }
    
}

// Function to display rules
function show(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = "block";
}

// Attach click event listener to the submit button
document.getElementById("sub").addEventListener("click", verify);

// Attach click event listener to the "Rules" button
document.getElementById("rule").addEventListener("click", function () {
    show("rules");

    
});