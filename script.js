// Function to hash the access key
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
    const storedUserId = localStorage.getItem('userId'); // Get the user ID

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
        const userId = "user" + Math.floor(Math.random() * 100000); // Generate a unique User ID

        // Store the hashed key, user ID, and initial balance in localStorage
        localStorage.setItem('userHashedAccessKey', hashedKey);
        localStorage.setItem('userId', userId); // Store the user ID
        localStorage.setItem('depositBalance', 100);  // Example Deposit Balance
        localStorage.setItem('winningBalance', 50);  // Example Winning Balance
        alert("Access Key created successfully! You can now use it to log in.");
    } else {
        alert("Access Key creation canceled.");
    }
}

// Display user balance and user ID on the homepage
function displayUserInfo() {
    const userId = localStorage.getItem('userId');  // Get the stored User ID
    const depositBalance = localStorage.getItem('depositBalance');
    const winningBalance = localStorage.getItem('winningBalance');

    // Make sure to show the User ID correctly after login
    if (userId) {
        document.getElementById('displayUserId').innerText = userId; // Display the User ID
    } else {
        document.getElementById('displayUserId').innerText = 'Not Logged In'; // If no User ID is found
    }

    document.getElementById('depositBalance').innerText = depositBalance || '$0';
    document.getElementById('winningBalance').innerText = winningBalance || '$0';
}

// Logout function
function logout() {
    localStorage.removeItem('userHashedAccessKey'); // Clear stored access key
    localStorage.removeItem('userId');              // Clear user ID
    localStorage.removeItem('depositBalance');     // Clear deposit balance
    localStorage.removeItem('winningBalance');     // Clear winning balance
    alert("You have logged out.");
    window.location.href = "index.html"; // Redirect back to the login page
}

// Event listener for logout
document.getElementById('logoutBtn').addEventListener('click', logout);

// Call displayUserInfo to show user ID and balance when the page is loaded
window.onload = function() {
    displayUserInfo();
};
