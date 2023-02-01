const buttons = document.querySelectorAll('input[type="button"][data-number]')
const display = document.querySelector('#display')
let temp
let first
let second

buttons.forEach(button => {

    button.addEventListener('click', (e) => {

        display.textContent = `${display.textContent}${e.target.getAttribute('data-number')}`

    })
    
});

let add = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let divide = (a, b) => a / b

function operate(){
    
}