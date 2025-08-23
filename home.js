// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const BankName = document.getElementById("bank").value;
    const accountNo = document.getElementById("account-no").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNO = document.getElementById("pin-no").value;
    const firstBalance = parseInt(document.getElementById("Balance").innerText);
    const validPin = "2006";
    console.log(firstBalance);
    if (accountNo.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (pinNO != validPin) {
      alert("please provide valid pin number");
      return;
    }
    let newBalance = addAmount + firstBalance;
    //     console.log(addAmount, firstBalance);
    document.getElementById("Balance").innerText = newBalance;
  });
// cashOut feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  const availableBalance = parseInt(
    document.getElementById("Balance").innerText
  );
  const pinDisit = document.getElementById("pin-digit").value;
  const agentNumber = document.getElementById("agent-number").value;
  const cashOutPin = "2006";
  if (agentNumber.length < 11) {
    alert("please provide valid account number");
    return;
  }
  if (pinDisit !== cashOutPin) {
    alert("please provide valid pin number");
    return;
  }

  const withdrawValue = withdrawAmount - availableBalance;
  document.getElementById("Balance").innerText = withdrawValue;
});

// toggling feature
document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});

// document.querySelector("input").value;
