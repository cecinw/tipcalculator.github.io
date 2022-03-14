var bill = document.getElementById("bill");
var people = document.getElementById("people");
var tip = document.getElementById("tip");
var percent = document.getElementById("percentage");
var calc = document.getElementById("calculate");
var totalTip = document.getElementById("totalTip");
var totalBill = document.getElementById("totalBill");
var totalxPerson = document.getElementById("totalxPerson");

tip.addEventListener("input", () => {
    percent.innerHTML = tip.value + "%";
});

calc.addEventListener("click", () => {
    var tipInEuros = parseFloat((tip.value * bill.value) / 100).toFixed(2);
    totalTip.innerText = tipInEuros + " €";
    var billWithTip = +bill.value + +tipInEuros;
    totalBill.innerText = billWithTip.toFixed(2) + " €";
    people = parseInt(people.value);
    totalxPerson.innerText = ((+tipInEuros + +bill.value) / people).toFixed(2) + " €";
});