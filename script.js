// Show login page initially
document.getElementById("loginPage").classList.add("show");

// Switch to Register Page
function switchToRegister() {
    document.getElementById("loginPage").classList.remove("show");
    document.getElementById("registerPage").classList.add("show");
}

// Switch to Login Page
function switchToLogin() {
    document.getElementById("registerPage").classList.remove("show");
    document.getElementById("successPage").classList.remove("show");
    document.getElementById("loginPage").classList.add("show");
}

// Function to Add New Record
function AddRow() {
    var usernamee = document.getElementById("usernamee").value;
    var passwordd = document.getElementById("passwordd").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    // Check if all fields are filled
    if (usernamee === "" || passwordd === "" || email === "" || phone === "") {
        alert("Please fill in all fields.");
        return false;
    } else {
        // Replace with your server-side logic to add record (e.g., google.script.run.AddRecord)
        console.log("Account Created:", usernamee, email, phone);
        document.getElementById("registerPage").classList.remove("show");
        document.getElementById("successPage").classList.add("show");
    }
}

// Login User Function
function LoginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace with your server-side logic (e.g., google.script.run.checkLogin)
    if (username === "test" && password === "password123") { // Example check
        document.getElementById("displayusername").innerText = username;
        document.getElementById("loginPage").classList.remove("show");
        document.getElementById("welcomePage").classList.add("show");
    } else {
        document.getElementById("errorMessage").innerText = "Invalid username or password.";
    }
}
