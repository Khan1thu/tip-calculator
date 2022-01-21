const billInput = document.querySelector("#Bill");
const customButton = document.querySelector(".custom");
const customInput = document.querySelector(".custom_input");
const resetButton = document.querySelector(".reset"); 
const peopleInput = document.querySelector(".people_input");
const peopleTitle = document.querySelector(".Zero");
const fifteenButton = document.querySelector(".fifteen");
const fiveButton = document.querySelector(".five");
const tenButton = document.querySelector(".ten");
const twentiefiveButton = document.querySelector(".twentiefive");
const fivintyButton = document.querySelector(".fivinty");

//rest button
resetButton.addEventListener("click", function reset(){

    document.querySelector(".tipAmount").innerHTML = "$0.00";

    document.querySelector(".totalAmount").innerHTML = "$0.00";

});

//five
fiveButton.addEventListener("click", function five(){
    if(peopleInput.value == 0 || peopleInput.value == undefined){
        peopleInput.classList.add("people_show");
        peopleTitle.classList.add("zero_show");
    }

    let bill = Number(billInput.value);
    let people = Number(peopleInput.value);
    let tipAmount = bill * 0.05;
    let total = bill + tipAmount;
    document.querySelector(".tipAmount").innerHTML = "$"+tipAmount.toFixed(2);
    document.querySelector(".totalAmount").innerHTML = "$"+total.toFixed(2);

}
);

//ten
tenButton.addEventListener("click", function ten(){
    if(peopleInput.value == 0 || peopleInput.value == undefined){
        peopleInput.classList.add("people_show");
        peopleTitle.classList.add("zero_show");
    }

    let bill = Number(billInput.value);
    let people = Number(peopleInput.value);
    let tipAmount = bill * 0.10;
    let total = bill + tipAmount;
    document.querySelector(".tipAmount").innerHTML = "$"+tipAmount.toFixed(2);
    document.querySelector(".totalAmount").innerHTML = "$"+total.toFixed(2);

}
);

//fifteen
fifteenButton.addEventListener("click", function fifteen(){
    if(peopleInput.value == 0 || peopleInput.value == undefined){
        peopleInput.classList.add("people_show");
        peopleTitle.classList.add("zero_show");
    }

    let bill = Number(billInput.value);
    let people = Number(peopleInput.value);
    let tipAmount = bill * 0.15;
    let total = bill + tipAmount;
    document.querySelector(".tipAmount").innerHTML = "$"+tipAmount.toFixed(2);
    document.querySelector(".totalAmount").innerHTML = "$"+total.toFixed(2);
});

//twentiefive
twentiefiveButton.addEventListener("click", function twentiefive(){
    if(peopleInput.value == 0 || peopleInput.value == undefined){
        peopleInput.classList.add("people_show");
        peopleTitle.classList.add("zero_show");
    }

    let bill = Number(billInput.value);
    let people = Number(peopleInput.value);
    let tipAmount = bill * 0.25;
    let total = bill + tipAmount;
    document.querySelector(".tipAmount").innerHTML = "$"+tipAmount.toFixed(2);
    document.querySelector(".totalAmount").innerHTML = "$"+total.toFixed(2);
});

//fivinty
fivintyButton.addEventListener("click", function fivinty(){
    if(peopleInput.value == 0 || peopleInput.value == undefined){
        peopleInput.classList.add("people_show");
        peopleTitle.classList.add("zero_show");
    }

    let bill = Number(billInput.value);
    let people = Number(peopleInput.value);
    let tipAmount = bill * 0.50;
    let total = bill + tipAmount;
    document.querySelector(".tipAmount").innerHTML = "$"+tipAmount.toFixed(2);
    document.querySelector(".totalAmount").innerHTML = "$"+total.toFixed(2);
});

//custominput
customButton.addEventListener("click", function custominput(){

    customButton.classList.add("custom_hidden");

    customInput.classList.add("custom_input_show");
}
);

//custominput 
customInput.addEventListener("change", function customInputButton() {

    customButton.classList.remove("custom_hidden");
    
    customInput.classList.remove("custom_input_show");
    
    inputValue = Number(customInput.value);

    let value = inputValue /  Math.pow(10, 2);
    
    let bill = Number(billInput.value);
    
    let tipAmount = bill * value;
    
    let total = bill + tipAmount;
    
    document.querySelector(".tipAmount").innerHTML = "$"+tipAmount.toFixed(2);
    
    document.querySelector(".totalAmount").innerHTML = "$"+total.toFixed(2);
});