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

// Handle the payment selection when user clicks on an image
function selectPayment(paymentMethod) {
    const amount = document.getElementById('amount').value;
    const upiId = "mktrader68@ybl";
    let redirectUrl;

    switch (paymentMethod) {
        case 'paytm':
            redirectUrl = `paytmmp://cash_wallet?featuretype=money_transfer&upi://pay?ver=01&mode=01&pa=${upiId}&pn=YourName&mc=5192&qrMedium=06&tn=Payment&am=${amount}`;
            break;
        case 'googlepay':
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        case 'phonepe':
            redirectUrl = `phonepe://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        case 'upi':
            redirectUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
            break;
        default:
            alert("Invalid payment method.");
            return;
    }

    // Redirect to the selected payment method
    window.location.href = redirectUrl;
}

// Submit payment details and redirect to WhatsApp with the payment message
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
