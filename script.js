//DOM selector
const billInput = document.querySelector("#Bill");
const tipButton = Array.from(document.querySelectorAll(".tip_button"));
const customButton = document.querySelector(".custom");
const customInput = document.querySelector(".custom_input");
const resetButton = document.querySelector(".reset");
const peopleInput = document.querySelector(".people_input");
const peopleTitle = document.querySelector(".Zero");

//rest button
resetButton.addEventListener("click", function reset() {
  document.querySelector(".tipAmount").innerHTML = "$0.00";

  document.querySelector(".totalAmount").innerHTML = "$0.00";
});

//Buttons
tipButton.map((b) => {
  b.addEventListener("click", (e) => {
    if (peopleInput.value == 0 || peopleInput.value == undefined) {
      peopleInput.classList.add("people_show");
      peopleTitle.classList.add("zero_show");
    }
    let bill = Number(billInput.value);
    let people = Number(peopleInput.value);
    let text = e.target.value;
    text = text.substring(0, text.length - 1);
    const result = Number(text) / 100;
    let tipAmount = bill * result;
    let total = bill + tipAmount;
    document.querySelector(".tipAmount").innerHTML = "$" + tipAmount.toFixed(2);
    document.querySelector(".totalAmount").innerHTML = "$" + total.toFixed(2);
  });
});

//custominput
customButton.addEventListener("click", function custominput() {
  customButton.classList.add("custom_hidden");

  customInput.classList.add("custom_input_show");
});

//custominput
customInput.addEventListener("change", function customInputButton() {
  customButton.classList.remove("custom_hidden");

  customInput.classList.remove("custom_input_show");

  inputValue = Number(customInput.value);

  let value = inputValue / Math.pow(10, 2);

  let bill = Number(billInput.value);

  let tipAmount = bill * value;

  let total = bill + tipAmount;

  document.querySelector(".tipAmount").innerHTML = "$" + tipAmount.toFixed(2);

  document.querySelector(".totalAmount").innerHTML = "$" + total.toFixed(2);
});
