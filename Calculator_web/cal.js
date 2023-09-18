let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    document.getElementById('display').value = displayValue;
}

function setOperator(operator) {
    if (displayValue !== '' && !displayValue.includes(operator)) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
