// Business Logic
function AccountInfo() {
  this.accountNumber = accountNumber
  this.deposit = deposit
  this.withdraw = withdraw
}

function accountInput(number) {
  if (number.length === 0 || !Number(number)) {
    return "This is not a valid input";
  }
  return number;
}

// UI Logic
function handleFormSubmisson(event) {
  event.preventDefault();
}

window.addEventListener("load", function() {
  document.querySelector("form#bankAccount").addEventListener("submit", handleFormSubmisson);
});