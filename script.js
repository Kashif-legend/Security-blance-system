// Function to hash the access key (already provided in your code)
async function hashKey(key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(key);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Login function
async function login() {
    const enteredKey = document.getElementById('accessKey').value;
    const hashedEnteredKey = await hashKey(enteredKey);
    const storedHashedKey = localStorage.getItem('userHashedAccessKey');

    if (hashedEnteredKey === storedHashedKey && storedHashedKey) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the homepage
    } else {
        alert("Invalid Access Key. Please try again or create a new key.");
    }
}

// Function to create an access key
async function createAccessKey() {
    const newKey = prompt("Enter a unique access key:");
    if (newKey) {
        const hashedKey = await hashKey(newKey);
        localStorage.setItem('userHashedAccessKey', hashedKey);
        localStorage.setItem('depositBalance', 100);  // Example Deposit Balance
        localStorage.setItem('winningBalance', 50);  // Example Winning Balance
        alert("Access Key created successfully! You can now use it to log in.");
    } else {
        alert("Access Key creation canceled.");
    }
}

// Display user balance on the homepage
function displayBalance() {
    const depositBalance = localStorage.getItem('depositBalance');
    const winningBalance = localStorage.getItem('winningBalance');

    document.getElementById('depositBalance').innerText = depositBalance || '$0';
    document.getElementById('winningBalance').innerText = winningBalance || '$0';
}

// Logout function
function logout() {
    localStorage.removeItem('userHashedAccessKey'); // Clear stored access key
    localStorage.removeItem('depositBalance');     // Clear deposit balance
    localStorage.removeItem('winningBalance');     // Clear winning balance
    alert("You have logged out.");
    window.location.href = "index.html"; // Redirect back to the login page
}

// Event listener for logout
document.getElementById('logoutBtn').addEventListener('click', logout);

// Call displayBalance to show balance when page is loaded
window.onload = function() {
    displayBalance();
};
