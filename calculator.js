// Calculator History Array

const history = [];

// Function to Add to History
function addToHistory(num1, num2, operator, result) {
    const record = {
        operand1: num1,
        operand2: num2,
        operator: operator,
        result: result
    };

    history.push(record);
}

// Arithmetic Functions
function add(a, b) {
    const result = a + b;
    addToHistory(a, b, "+", result);
    return result;
}

function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, "-", result);
    return result;
}

function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, "*", result);
    return result;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero");
        return null;
    }

    const result = a / b;
    addToHistory(a, b, "/", result);
    return result;
}

// Display History Function
function displayHistory() {
    if (history.length === 0) {
        console.log("No calculations yet.");
        return;
    }

    console.log("Calculation History:");
    history.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`
        );
    });
}

// Testing 
console.log(add(5, 3));        // 8
console.log(subtract(10, 4));  // 6
console.log(multiply(6, 2));   // 12
console.log(divide(8, 2));     // 4
console.log(divide(5, 0));     // Error: Cannot divide by zero

displayHistory();