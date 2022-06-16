const firstNumberInput = document.getElementById("firtsNumber") as HTMLInputElement;
const secondNumberInput = document.getElementById("secondNumbe") as HTMLInputElement;
const sumNumberInput = document.getElementById("sumNumber") as HTMLInputElement;
const addButton = document.getElementById("addButton") as HTMLButtonElement;

function addTwoNumbers(firstNumber:number, secondNumber:number):number
{
    return firstNumber + secondNumber;
}

function putValueIntoSumInput():void
{
    sumNumberInput.value = addTwoNumbers(parseInt(firstNumberInput.value), parseInt(secondNumberInput.value)).toString();
}

document.onload
{
    addButton.addEventListener("click", putValueIntoSumInput);
}