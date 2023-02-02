const buttonNumbers = document.querySelectorAll('input[type="button"].number')
const buttonOperands = document.querySelectorAll('input[type="button"].operand')
const display = document.querySelector('#display')
let first, second, previous
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

    const character = getKeyboardNumbers().find(element => element === e.key)  
    if(character){

        if(count == 0) 
        display.textContent = '' 

    display.textContent = `${display.textContent}${e.key}`
    count++

    }  

})

window.addEventListener('keydown', (e) => {
    
    const operand = getKeyboardOperands().find(element => element === e.key)  
    if(operand)
        operate(e.key)


})

function add(){

    if(!first)
        saveFirstNumber()
    else{

        if(!second && first){
            saveSecondNumber()
            if(second && first){
                let result = first + second
                saveResult(result)
            }
        }
            

    }

}

function subtract(){

    if(!first)
        saveFirstNumber()
    else{

        if(!second && first){
            saveSecondNumber()
            if(second && first){
                let result = first - second
                saveResult(result)
            }
        }
            

    }

}

function multiply(){

    if(!first)
        saveFirstNumber()
    else{

        if(!second && first){
            saveSecondNumber()
            if(second && first){
                let result = first * second
                saveResult(result)
            }
        }
            

    }

}

function divide(){

    if(!first)
        saveFirstNumber()
    else{

        if(!second && first){
            saveSecondNumber()
            if(second && first){
                let result = first / second
                saveResult(result)
            }
        }
            

    }

}

function operate(operand){

    const temp = operand

    if(previous)
        operand = previous

    switch(operand){
        case "+":
            add()
            break
        case "-":
            subtract()
            break
        case "x":
        case "*":
            multiply()
            break
        case "÷":
        case "/":
            divide()
            break
        case "=":
            
            break
    }

    previous = temp
    count = 0

}

function getKeyboardNumbers(){

    let keys = [...document.querySelectorAll('input[type="button"].number')]
    return keys.map(key => key.value)

}

function getKeyboardOperands(){
    let keys = [...document.querySelectorAll('input[type="button"].operand')]
    keys = keys.map(key => key.value) 
    keys.push('*', '/')
    return keys
}

function saveFirstNumber(){
    if(display.textContent){
        first = parseInt(display.textContent)
        count = 0
    }

}

function saveSecondNumber(){
    if(display.textContent){
        second = parseInt(display.textContent)
        count = 0
    }

}

function saveResult(result){
    first = result
    display.textContent = result
    second = null
    result = null
    count = 0
}