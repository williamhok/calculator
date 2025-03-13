const calculator = document.querySelector(".calculator")
const display = document.querySelector(".display")
const nums = document.querySelectorAll(".num")
const operand = document.querySelector(".operand")

let currInput = ""
let operator = ""
let prevInput = ""

nums.forEach(num => {
    num.addEventListener("click", () => {
        currInput += num.value
        display.textContent = currInput
    })
})