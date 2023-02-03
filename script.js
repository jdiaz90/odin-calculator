const buttonNumbers = document.querySelectorAll('input[type="button"].number')
const buttonOperands = document.querySelectorAll('input[type="button"].operand')
const buttonDecimal = document.querySelector('input[type="button"]#decimal')
const buttonClear = document.querySelector('input[type="button"]#clear')
const buttonBackspace = document.querySelector('button#backspace')
const display = document.querySelector('#result')
let first, second, previous
let displayLength = 0

let add = () => first + second
let subtract = () => first - second
let multiply = () => first * second
let divide = () => first / second





buttonNumbers.forEach(button => {

    button.addEventListener('click', (e) => {

        checkIfDisplayMustBeEmpty() 

        display.textContent = `${display.textContent}${e.target.value}`
        displayLength++
    })
    
})

buttonOperands.forEach(button => {

    button.addEventListener('click', (e) => operate(e.target.value))
    
})

buttonDecimal.addEventListener('click', () => {

    checkIfDisplayMustBeEmpty()  
    writeDecimal()

})

buttonClear.addEventListener('click', (e) => {

    clearButtonPressed()

})

buttonBackspace.addEventListener('click', (e) => {

    backspaceButtonPressed()

})


window.addEventListener('keydown', (e) => {

    const character = getKeyboardNumbers().find(element => element === e.key)  
    if(character){

        checkIfDisplayMustBeEmpty() 

        display.textContent = `${display.textContent}${e.key}`
        displayLength++

    }  

})

window.addEventListener('keydown', (e) => {
    
    const operand = getKeyboardOperands().find(element => element === e.key)  
    if(operand)
        operate(e.key)

})


window.addEventListener('keydown', (e) => {

    switch (e.key){
        case '.':
            checkIfDisplayMustBeEmpty()  
            writeDecimal()
            break
        case 'Delete':
            clearButtonPressed()
            break
        case 'Backspace':
            backspaceButtonPressed()
            break
        case 'Enter':
            operate('=')
            break
    }

})

function calcs(calc){

    if(!first)
        saveFirstNumber()
    else{

        if(!second && first){
            saveSecondNumber()
            if(second && first){
                let result = calc()
                saveResult(result)
            }
        }     

    }

}

function operate(operand){

    if(!previous && operand == '=')
        return

    const temp = operand

    if(previous)
        operand = previous

    switch(operand){
        case "+":
        case "-":
        case "x":
        case "*":
        case "÷":
        case "/":
        case "=":
            optionsOperate(operand)
            previous = temp
            displayLength = 0
            break
    }

}

function optionsOperate(operand){

    switch(operand){
        case "+":
            return calcs(add)
        case "-":
            return calcs(subtract)
        case "x":
        case "*":
            return calcs(multiply)
        case "÷":
        case "/":
            return calcs(divide)
    }

}

function getKeyboardNumbers(){

    let keys = [...document.querySelectorAll('input[type="button"].number')]
    return keys.map(key => key.value)

}

function getKeyboardOperands(){
    let keys = [...document.querySelectorAll('input[type="button"].operand')]
    keys = keys.map(key => key.value) 
    keys.push('*', '/','=')
    return keys
}

function saveFirstNumber(){
    if(display.textContent){
        first = parseFloat(display.textContent)
        displayLength = 0
    }

}

function saveSecondNumber(){
    if(display.textContent){
        second = parseFloat(display.textContent)
        displayLength = 0
    }

}

function saveResult(result){
    first = result
    display.textContent = result
    second = null
    displayLength = 0
}

function checkDecimal(){

    const displayArray = display.textContent.split('')
    let displayLength = displayArray.reduce((obj, item) =>  {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
    
    if(displayLength['.'] > 0)
        return true
    return false

}

function writeDecimal(){

    if(!checkDecimal()){

        if(displayLength == 0) 
            display.textContent = '0' 

        display.textContent = `${display.textContent}.`
        displayLength++
    }

}

function checkIfDisplayMustBeEmpty(){
    if(displayLength == 0) 
        display.textContent = '' 
}

function clearButtonPressed(){
    first = null
    second = null
    result = null
    previous = null
    displayLength = 0
    checkIfDisplayMustBeEmpty()
}

function backspaceButtonPressed(){

    let text = display.textContent.split('')
    text.pop()
    display.textContent = text.join('')

}