// Function to fetch user balance using the access key
async function fetchUserBalance() {
    // Retrieve the stored access key from localStorage
    const accessKey = localStorage.getItem('userHashedAccessKey');
    if (!accessKey) {
        alert("Please log in first.");
        return;
    }

    // Display the user's access key on the page
    document.getElementById('accessKeyDisplay').innerText = accessKey;

    // Construct the URL with the user's access key
    const url = `https://script.google.com/macros/s/AKfycbzyzRoOkjTthXgBrgLZVX6C2vamhOjascdoWhKf3w/dev?accessKey=${accessKey}`;

    // Send GET request to the Google Apps Script URL
    const response = await fetch(url);

    // Parse the JSON response
    const result = await response.json();

    // Check if the result contains balance data
    if (result["Deposit Balance"] !== undefined) {
        // Display the balance information
        document.getElementById('depositBalance').innerText = result["Deposit Balance"];
        document.getElementById('winningBalance').innerText = result["Winning Balance"];
    } else {
        // If no balance data is found, display an error
        alert("No balance information found for this user.");
    }
}

// Call the function to fetch and display the balance
fetchUserBalance();
