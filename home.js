const transactionData = [];

// function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
function getInputField(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
// function to get inner text
// function getInnerText(id) {
//   const element = document.getElementById(id);
//   const elementValue = element.innerText;
//   const elementValueNumber = parseInt(elementValue);
//   console.log(elementValueNumber);
// }
// function to set innerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}
// function to toggle btns
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}
// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// add Amount
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const BankName = getInputField("bank");
    const accountNo = document.getElementById("account-no").value;
    const addAmount = getInputValueNumber("add-amount");
    if (addAmount <= 0) {
      alert("Invalid amount");
      return;
    }
    const pinNO = document.getElementById("pin-no").value;

    const firstBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const validPin = "2006";
    if (accountNo.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (pinNO != validPin) {
      alert("please provide valid pin number");
      return;
    }
    let newBalance = addAmount + firstBalance;
    // console.log(addAmount, firstBalance);
    setInnerText(newBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    // console.log(transactionData);
  });
// cashOut feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = getInputValueNumber("withdraw-amount");

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
    alert("Invalid amount");
    return;
  }
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
  setInnerText(withdrawValue);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  // console.log(transactionData);
});

// transaction page show
document
  .getElementById("Transactions-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerHTML = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="bg-white rounded-xl p-3 border border-gray-200 flex justify-between items-center">
                              <div class="rounded-xl flex items-center gap-3 mt-3">
                                    <figure class="p-3 rounded-full bg-[#F4F5F7] ">
                                          <img class="mx-auto" src="./assets/wallet1.png" alt="">
                                    </figure>
                                    <div>
                                          <h1 class="font-semibold text-gray-600">${data.name}</h1>
                                          <p class="text-gray-500">${data.date}</p>
                                    </div>
                              </div>
                              <div>
                                    <i class="fa-solid fa-ellipsis-vertical text-gray-600"></i>
                              </div>
                        </div>
      `;
      transactionContainer.appendChild(div);
    }
  });

// toggling feature
// add money
document.getElementById("add-btn").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-btn");
});
// cash out
document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleButtonToggle("cash-out-btn");
});
// Transfer Money
document.getElementById("Transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-parent");
  handleButtonToggle("Transfer-btn");
});
// Get Bonus
document.getElementById("Bonus-btn").addEventListener("click", function () {
  handleToggle("bonus-parent");
  handleButtonToggle("Bonus-btn");
});
// Pay Bill
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("pay-bill-btn");
});
// Transactions
document
  .getElementById("Transactions-btn")
  .addEventListener("click", function () {
    handleToggle("Transactions-parent");
    handleButtonToggle("Transactions-btn");
  });
