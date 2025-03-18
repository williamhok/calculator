const calculator = document.querySelector(".calculator")
const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".btn")
const operand = document.querySelector(".operand")

let currInput = ""
let operator = ""
let prevInput = ""

buttons.forEach(button => {
    button.addEventListener("click", () => {
        currInput += button.value
        display.textContent = currInput
    })
})

function operate(a, b) {
    switch ("=") {
        case "+":
            add(a, b)
        case "-":
            subtract(a, b)
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