const buttonNumbers = document.querySelectorAll('input[type="button"].number')
const buttonOperand = document.querySelectorAll('input[type="button"].operand')
const display = document.querySelector('#display')
let temp
let first
let second

buttonNumbers.forEach(button => {

    button.addEventListener('click', (e) => {

        display.textContent = `${display.textContent}${e.target.value}`

    })
    
});

    window.addEventListener('keydown', (e) => {

        const character = getKeyboardKeys().find(element => element === e.key)  
        if(character)
            display.textContent = `${display.textContent}${character}`  

    })

let add = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let divide = (a, b) => a / b

function operate(){

}

function getKeyboardKeys(){

    let keys = [...document.querySelectorAll('input[type="button"]')]
    return keys.map(key => key.value)

}