let firstNumber = null;
let currentOperation = null;
let isSecondNumber = false;

function addDigit(digit) {
    const input = document.getElementById("numberInput");

    if (isSecondNumber) {
        input.value += digit;
    } else {
        input.value += digit;
    }
}

function setOperation(operation) {
    const input = document.getElementById("numberInput");

    if (firstNumber === null) {
        firstNumber = parseFloat(input.value);
    } else if (!isSecondNumber) {
        calculateResult();
        firstNumber = parseFloat(document.getElementById("resultValue").textContent);
    }

    currentOperation = operation;
    input.value = firstNumber + " " + operation + " ";
    isSecondNumber = true;
}

function calculateResult() {
    const input = document.getElementById("numberInput");
    const resultValue = document.getElementById("resultValue");
    const error = document.getElementById("error");
    error.textContent = "";

    const expression = input.value.split(" ");
    if (expression.length < 3) {
        error.textContent = "Будь ласка, введіть число, операцію і друге число.";
        resultValue.textContent = "0";
        return;
    }

    const secondNumber = parseFloat(expression[2]);

    if (isNaN(secondNumber) || isNaN(firstNumber)) {
        error.textContent = "Будь ласка, введіть правильні числа.";
        resultValue.textContent = "0";
        return;
    }

    let result;
    switch (currentOperation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                error.textContent = "Ділення на нуль неможливе.";
                resultValue.textContent = "0";
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    resultValue.textContent = Number.isInteger(result) ? result : result.toFixed(2);
    input.value = resultValue.textContent;
    firstNumber = parseFloat(result);
    currentOperation = null;
    isSecondNumber = false;
}

function resetCalculator() {
    document.getElementById("numberInput").value = "";
    document.getElementById("resultValue").textContent = "0";
    document.getElementById("error").textContent = "";
    firstNumber = null;
    currentOperation = null;
    isSecondNumber = false;
}