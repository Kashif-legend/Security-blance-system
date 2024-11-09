let selectedPaymentMethod = "";

// Function to show the payment options page
function showPaymentOptions() {
    const amount = document.getElementById('amount').value;
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    document.getElementById('paymentOptions').style.display = "block";
    document.getElementById('paymentOptions').style.opacity = 1;

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
            redirectUrl = `phonepe://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        case "upi":
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        default:
            alert("Invalid payment method.");
            return;
    }

    window.location.href = redirectUrl;
}

// Function to submit payment details via WhatsApp
function submitDetails() {
    const amount = document.getElementById('amount').value;
    const utr = document.getElementById('utr').value;
    if (!amount || !utr) {
        alert("Please enter both the amount and UTR number.");
        return;
    }

    const message = `Payment Details:\nAmount: ₹${amount}\nUTR: ${utr}\nPayment Method: ${selectedPaymentMethod}`;
    const phoneNumber = "8756068701";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
                                                                                          }
