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

function add(a, b) {
    return a + b
}