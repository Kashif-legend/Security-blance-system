// Show payment details page after entering the amount
function showPaymentDetailsPage() {
    const amount = document.getElementById('amount').value;

    // Validate the amount
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Hide the amount entry page and show the payment details page
    document.getElementById('amountPage').style.display = "none";
    document.getElementById('paymentDetailsPage').style.display = "block";

    // Set the amount on the payment details page
    document.getElementById('paymentAmount').textContent = "₹" + amount;
}

// Function to submit the payment details and redirect to WhatsApp
function submitDetails() {
    const amount = document.getElementById('amount').value;
    const utr = document.getElementById('utr').value;

    if (!amount || !utr) {
        alert("Please fill in the required details (Amount and UTR).");
        return;
    }

    const message = `Payment Details:\nAmount: ₹${amount}\nUTR Number: ${utr}`;
    const whatsappUrl = `https://wa.me/918756068701?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open WhatsApp chat with payment details
}

// Show the payment options section
function showPaymentOptions() {
    const amount = document.getElementById('amount').value;
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Show payment options and QR code section
    document.getElementById('paymentOptions').style.display = "block";
    document.getElementById('paymentOptions').style.opacity = 1;

    // Create UPI QR code for payment
    const upiId = "mktrader68@ybl";
    const qrData = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;

    document.getElementById('qrCode').src = qrUrl;
    document.getElementById('qrCodeContainer').style.display = "block";
}

// Toggle the dropdown for selecting a payment method
function toggleDropdown() {
    document.getElementById('optionsList').style.display = 
        document.getElementById('optionsList').style.display === "block" ? "none" : "block";
}

// Select the payment method from the dropdown
function selectOption(method) {
    const optionText = {
        paytm: "Paytm",
        googlepay: "Google Pay",
        phonepe: "PhonePe",
        upi: "UPI"
    }[method];

    // Update the selected option text
    document.getElementById('selectedOption').textContent = optionText;

    // Close the dropdown after selection
    toggleDropdown();
}

// Trigger the payment redirect based on the selected method
function payNow() {
    const amount = document.getElementById('amount').value;
    const selectedPaymentMethod = document.getElementById('selectedOption').textContent.toLowerCase();

    if (!amount || !selectedPaymentMethod) {
        alert("Please enter the amount and select a payment method.");
        return;
    }

    const upiId = "mktrader68@ybl";
    let redirectUrl;

    // Set the redirect URL based on the selected payment method
    switch (selectedPaymentMethod) {
        case "paytm":
            redirectUrl = `paytmmp://cash_wallet?featuretype=money_transfer&upi://pay?ver=01&mode=01&pa=${upiId}&pn=YourName&mc=5192&qrMedium=06&tn=Payment&am=${amount}`;
            break;
        case "google pay":
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        case "phonepe":
            redirectUrl = `phonepe://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        case "upi":
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        default:
            alert("Invalid payment method.");
            return;
    }

    // Redirect to the selected payment method
    window.location.href = redirectUrl;
}
