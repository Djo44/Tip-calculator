let bill = document.querySelector("#bill");
let custom = document.querySelector("#custom");
let numberOfPeople = document.querySelector("#person");
let tipAmount = document.querySelector(".tip-amount-person");
let totalAmount = document.querySelector(".total-person");
let showError = document.querySelector(".show-error");
let percentButtons = document.querySelectorAll(".btn-dark");

/* checks if numberOfPeople is > 0 */

function checkIfValid() {
  if (numberOfPeople.value <= 0) {
    showError.style.visibility = "visible";
    numberOfPeople.style.borderColor = "red";
    reset();
  } else {
    showError.style.visibility = "hidden";
    numberOfPeople.style.borderColor = "";
  }
}

/* Calculate % of tip */

function calculatePercent(percent) {
  let perentage = percent / 100;
  let amount = bill.value * perentage;
  tipAmount.innerHTML = "$" + amount.toFixed(2);
  let total = parseFloat((totalAmount.innerHTML = amount * numberOfPeople.value));
  let newTotal = total.toFixed(2);
  totalAmount.innerHTML = "$" + newTotal;
  checkIfValid();
}

//button clicks
percentButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let perentage = button.innerText.split("");
    let newPercentage = parseInt(perentage.filter((index) => index != "%").join(""));
    if (custom.value > 0 && custom.value <= 100) {
      newPercentage = custom.value;
    }
    console.log(newPercentage);
    getPercentage(newPercentage);
  });
});

function getPercentage(percentValue) {
  calculatePercent(percentValue);
}

/* reset data */

function reset() {
  tipAmount.innerHTML = `$0.00`;
  totalAmount.innerHTML = `$0.00`;
  bill.value = 0;
  numberOfPeople.value = 0;
}
