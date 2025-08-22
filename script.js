document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 1234567891;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobileNo").value;
  const mobileConvertedValue = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pinNo").value;
  const pinConvertedValue = parseInt(pinNumberValue);

  if (
    mobileConvertedValue === mobileNumber &&
    pinConvertedValue === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid credential");
  }
});
