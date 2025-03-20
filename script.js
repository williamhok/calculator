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
            topDisplay.textContent = currInput
            botDisplay.textContent = ""
            prevInput = currInput
            currInput = ""
        }
    })
})

function operate(a, b) {
    switch ("=") {
        case "+":
            add(a, b)
        case "-":
            subtract(a, b)
        case "*":
            multiply(a, b)
        case "/":
            divide(a, b)
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