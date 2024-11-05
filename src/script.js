let currentOperation = null; 

function setOperation(operation) {
    currentOperation = operation;
}

function calculateResult() {
    const number1 = document.getElementById("number1").value.trim();
    const number2 = document.getElementById("number2").value.trim();
    const resultValue = document.getElementById("resultValue");
    const error = document.getElementById("error");

    error.textContent = "";

    if (!currentOperation) {
        error.textContent = "Оберіть операцію для виконання.";
        resultValue.textContent = "0";
        return;
    }

    if (number1 === "" || number2 === "") {
        error.textContent = "Будь ласка, введіть обидва числа.";
        resultValue.textContent = "0";
        return;
    }
    
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
        error.textContent = "Будь ласка, введіть коректні числа.";
        resultValue.textContent = "0";
        return;
    }

    let result;
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                error.textContent = "Ділення на нуль неможливе.";
                resultValue.textContent = "0";
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    resultValue.textContent = Number.isInteger(result) ? result : result.toFixed(2);
}

function resetCalculator() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("resultValue").textContent = "0";
    document.getElementById("error").textContent = "";
    currentOperation = null;
}
