const buttonNumbers = document.querySelectorAll('input[type="button"].number')
const buttonOperands = document.querySelectorAll('input[type="button"].operand')
const display = document.querySelector('#display')
let temp
let count = 0

buttonNumbers.forEach(button => {

    button.addEventListener('click', (e) => {

        if(count == 0) 
            display.textContent = '' 

        display.textContent = `${display.textContent}${e.target.value}`
        count++
    })
    
});

buttonOperands.forEach(button => {

    button.addEventListener('click', (e) => operate(e.target.value))
    
});

window.addEventListener('keydown', (e) => {

    const character = getKeyboardKeys().find(element => element === e.key)  
    if(character)
        display.textContent = `${display.textContent}${character}`  

})

function add(){

    if(!temp) saveFirstNumber()
    else {

        let result = temp + parseInt(display.textContent)
        saveResult(result)

    }
}

function subtract(){

    if(!temp) saveFirstNumber()
    else {

        let result = temp - parseInt(display.textContent)
        saveResult(result)

    }
}

function multiply(){

    if(!temp) saveFirstNumber()
    else {

        let result = temp * parseInt(display.textContent)
        saveResult(result)

    }
}

function divide(){

    if(!temp) saveFirstNumber()
    else {

        let result = temp / parseInt(display.textContent)
        saveResult(result)

    }
    
}

function operate(operand){

    switch(operand){
        case "+":
            add()
            break
        case "-":
            subtract()
            break
        case "x":
            multiply()
            break
        case "÷":
            divide()
            break
        case "=":
        
            break
    }

    count = 0

}

function getKeyboardKeys(){

    let keys = [...document.querySelectorAll('input[type="button"]')]
    return keys.map(key => key.value)

}

function saveFirstNumber(){
    temp = parseInt(display.textContent)
    display.textContent = ''
}

function saveResult(result){
    temp = result
    display.textContent = result
}