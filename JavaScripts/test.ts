var firstNumberInput, secondNumberInput, sumNumberInput, addButton;

function addTwoNumbers(firstNumber:number, secondNumber:number):number
{
    return firstNumber + secondNumber;
}

function putValueIntoSumInput():void
{
    sumNumberInput.value = addTwoNumbers(parseInt(firstNumberInput.value), parseInt(secondNumberInput.value)).toString();
}

document.addEventListener("DOMContentLoaded", function()
{
    firstNumberInput = document.getElementById("firstNumber") as HTMLInputElement;
    secondNumberInput = document.getElementById("secondNumber") as HTMLInputElement;
    sumNumberInput = document.getElementById("sumNumber") as HTMLInputElement;
    addButton = document.getElementById("addButton") as HTMLButtonElement;

    addButton.addEventListener("click", putValueIntoSumInput);
});