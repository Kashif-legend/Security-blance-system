let selectedPaymentMethod = "";

// Set suggested amount
function setSuggestedAmount(amount) {
    document.getElementById('amount').value = amount;
}

// Show Payment Options and QR Code
function showPaymentOptions() {
    const amount = document.getElementById('amount').value;
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Hide the amount input and show payment options
    document.getElementById('amountSection').style.display = "none";
    document.getElementById('paymentOptions').style.display = "block";
    document.getElementById('paymentOptions').style.opacity = 1;

    // UPI ID and QR Code generation
    const upiId = "mktrader68@ybl";
    const qrData = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    document.getElementById('qrCode').src = qrUrl;
    document.getElementById('qrCodeContainer').style.display = "block";
}

// Open respective payment app with delay to make sure QR is loaded
function openPaymentApp(paymentMethod) {
    const amount = document.getElementById('amount').value;
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const upiId = "mktrader68@ybl";
    let redirectUrl;

    switch (paymentMethod) {
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

    // Attempt to open the payment app after a short delay
    setTimeout(function() {
        window.location.href = redirectUrl; // Try opening the app
    }, 100); // Delay to give QR code time to generate (in milliseconds)
}

// Submit UTR details
function submitDetails() {
    const utr = document.getElementById('utr').value;
    if (!utr) {
        alert("Please enter the UTR number.");
        return;
    }

    // You can handle UTR submission here, like sending the UTR to the server.
    alert(`UTR number submitted: ${utr}`);
              }
