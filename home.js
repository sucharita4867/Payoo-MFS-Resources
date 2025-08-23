document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const BankName = document.getElementById("bank").value;
    const accountNo = document.getElementById("account-no").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNO = document.getElementById("pin-no").value;
    //     console.log(BankName, accountNo, addAmount, pinNO);
    const firstBalance = parseInt(document.getElementById("Balance").innerText);
    //     console.log(firstBalance);
    let newBalance = addAmount + firstBalance;
    console.log(newBalance);
    document.getElementById("Balance").innerText = newBalance;
  });
