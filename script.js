// Show the payment details page after entering the amount
function showPaymentDetailsPage() {
    const amount = document.getElementById('amount').value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Hide the first page and show the second page
    document.getElementById('amountPage').style.display = "none";
    document.getElementById('paymentDetailsPage').style.display = "block";

    // Display the entered amount on the second page
    document.getElementById('paymentAmount').textContent = "₹" + amount;

    // Create the UPI QR Code
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

// Submit the payment details and redirect to WhatsApp
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
