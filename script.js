// Show payment details section after entering the amount
function showPaymentDetails() {
    const amount = document.getElementById('amount').value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Hide amount input section and show payment details section
    document.getElementById('amountSection').style.display = "none";
    document.getElementById('paymentDetailsSection').style.display = "block";

    // Display the entered amount
    document.getElementById('paymentAmount').textContent = amount;

    // Create the UPI QR Code
    const upiId = "mktrader68@ybl";
    const qrData = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;

    // Display the QR Code
    document.getElementById('qrCode').src = qrUrl;
    document.getElementById('qrCodeContainer').style.display = "block";
}

// Toggle the dropdown for selecting a payment method
function toggleDropdown() {
    document.getElementById('optionsList').style.display =
        document.getElementById('optionsList').style.display === "block" ? "none" : "block";
}

// Select a payment method from the dropdown
function selectOption(method) {
    const optionText = {
        paytm: "Paytm",
        googlepay: "Google Pay",
        phonepe: "PhonePe",
        upi: "UPI"
    }[method];

    document.getElementById('selectedOption').textContent = optionText;
    toggleDropdown();
}

// Submit payment details and redirect to WhatsApp
function submitDetails() {
    const amount = document.getElementById('amount').value;
    const utr = document.getElementById('utr').value;

    if (!amount || !utr) {
        alert("Please fill in the required details (Amount and UTR).");
        return;
    }

    const message = `Payment Details:\nAmount: ₹${amount}\nUTR Number: ${utr}`;
    const whatsappUrl = `https://wa.me/918756068701?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}
