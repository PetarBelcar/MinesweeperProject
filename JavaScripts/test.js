var firstNumberInput, secondNumberInput, sumNumberInput, addButton;
function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function putValueIntoSumInput() {
    sumNumberInput.value = addTwoNumbers(parseInt(firstNumberInput.value), parseInt(secondNumberInput.value)).toString();
}
document.addEventListener("DOMContentLoaded", function () {
    firstNumberInput = document.getElementById("firstNumber");
    secondNumberInput = document.getElementById("secondNumber");
    sumNumberInput = document.getElementById("sumNumber");
    addButton = document.getElementById("addButton");
    addButton.addEventListener("click", putValueIntoSumInput);
});
