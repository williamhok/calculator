const calculator = document.querySelector(".calculator")
const topDisplay = document.querySelector(".display-top")
const botDisplay = document.querySelector(".display-bot")
const buttons = document.querySelectorAll(".btn")
const operand = document.querySelector(".operand")

let currInput = ""
let operator = ""
let prevInput = ""

buttons.forEach(button => {
    button.addEventListener("click", () => {
        currInput += button.value
        botDisplay.textContent = currInput

        if (button.value == "+" || button.value == "-" || button.value == "*" || button.value == "/") {
            operator += button.value
            topDisplay.textContent = currInput
            botDisplay.textContent = ""
            prevInput = currInput
            currInput = ""
        }

        if (button.value == "=") {
            topDisplay.textContent += botDisplay.textContent
            botDisplay.textContent = operate(prevInput, currInput, operator)
        }

        if (button.value == "clear") {
            currInput = ""
            operator = ""
            prevInput = ""

            operator = ""
            topDisplay.textContent = ""
            botDisplay.textContent = ""
        }
    })
})

function operate(prevInput, currInput, operator) {
    const a = parseFloat(prevInput)
    const b = parseFloat(currInput)

    switch (operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}