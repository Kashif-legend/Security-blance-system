let selectedPaymentMethod = "";

// Function to navigate to the Payment Details Page
function goToPaymentDetails() {
    const amount = document.getElementById('amount').value;
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Hide the amount page and show the payment details page with animation
    document.getElementById('amountPage').style.display = "none";
    document.getElementById('paymentPage').style.display = "block";

    setTimeout(() => {
        document.getElementById('paymentPage').style.opacity = 1;
    }, 100);

    // Generate QR code for payment
    const upiId = "mktrader68@ybl";
    const qrData = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    document.getElementById('qrCode').src = qrUrl;
    document.getElementById('qrCodeContainer').style.display = "block";
}

// Function to toggle the dropdown menu for payment methods
function toggleDropdown() {
    const optionsList = document.getElementById('optionsList');
    optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
}

// Function to select a payment method
function selectOption(method) {
    selectedPaymentMethod = method;
    const optionText = {
        paytm: "Paytm",
        googlepay: "Google Pay",
        phonepe: "PhonePe",
        upi: "UPI"
    }[method];

    document.getElementById('selectedOption').textContent = optionText;
    toggleDropdown();
}

// Function to handle the payment process
function payNow() {
    const amount = document.getElementById('amount').value;
    if (!amount || !selectedPaymentMethod) {
        alert("Please enter the amount and select a payment method.");
        return;
    }

    const upiId = "mktrader68@ybl";
    let redirectUrl;

    switch (selectedPaymentMethod) {
        case "paytm":
            redirectUrl = `paytmmp://cash_wallet?featuretype=money_transfer&upi://pay?ver=01&mode=01&pa=${upiId}&pn=YourName&mc=5192&qrMedium=06&tn=Payment&am=${amount}`;
            break;
        case "googlepay":
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        case "phonepe":
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        case "upi":
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        default:
            alert("Please select a valid payment method.");
            return;
    }

    window.location.href = redirectUrl; // Redirecting to the selected payment method
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
    const whatsappUrl = `https://wa.me/+918756068701?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open WhatsApp chat with payment details
    }
