
function setSuggestedAmount(amount) {
    document.getElementById("amount").value = amount;
}

function showPaymentOptions() {
    var amount = document.getElementById("amount").value;
    if (amount > 0) {
        document.getElementById("paymentOptions").style.display = "block";
        document.getElementById("amountSection").style.display = "none";
    } else {
        alert("Please enter a valid amount.");
    }
}

function openPaymentApp(app) {
    console.log(`Opening ${app}
