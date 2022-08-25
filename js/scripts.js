// Business Logic
function AccountInfo() {
  this.accountNumber = accountNumber
  this.deposit = deposit
  this.withdraw = withdraw
}
// UI Logic
function handleFormSubmisson(event) {
  event.preventDefault();
}

window.addEventListener("load", function() {
  document.querySelector("form#bankAccount").addEventListener("submit", handleFormSubmisson);
});