
function setSuggestedAmount(amount) {
  document.getElementById("amount").value = amount;
}

function showPaymentOptions() {
  var amount = document.getElementById("amount").value;
  if (amount > 0 && !isNaN(amount)) {
    document.getElementById("paymentOptions").style.display = "block";
    document.getElementById("amountSection").style.display = "none";
  } else {
    alert("Kripya valid amount darj karein.");
  }
}

function openPaymentApp(app) {
  alert(`Opening ${app}`);
  // Payment app khोलनе ka logic yahaan add karein
}

function submitDetails() {
  var utr = document.getElementById("utr").value;
  if (utr) {
    // UTR submit karne ka logic yahaan add karein
    alert("UTR submit kiya gaya!");
  } else {
    alert("Kripya UTR darj karein.");
  }
}
