// Function to get user data from localStorage
function getUserData() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData;
}

// Function to display the access key and balance
function displayUserData() {
    const userData = getUserData();

    if (userData) {
        // Display access key and balance
        document.getElementById('accessKeyDisplay').innerText = userData.accessKey;
        document.getElementById('balanceDisplay').innerText = userData.balance;
    } else {
        // If user is not logged in or no user data is available
        alert("No user data found. Please log in.");
    }
}

// Call displayUserData when the page loads
window.onload = displayUserData;

// Logout function
function logout() {
    localStorage.removeItem('userData'); // Remove user data from localStorage
    localStorage.removeItem('userHashedAccessKey'); // Remove hashed access key
    window.location.href = "LOGIN.html"; // Redirect to login page
}

// Add event listener to logout button
document.getElementById('logoutBtn').addEventListener('click', logout);
