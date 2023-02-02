const buttonNumbers = document.querySelectorAll('input[type="button"].number')
const buttonOperands = document.querySelectorAll('input[type="button"].operand')
const buttonDecimal = document.querySelector('input[type="button"]#decimal')
const display = document.querySelector('#display')
let first, second, previous
let count = 0

buttonNumbers.forEach(button => {

    button.addEventListener('click', (e) => {

        clearDisplay() 

        display.textContent = `${display.textContent}${e.target.value}`
        count++
    })
    
})

buttonOperands.forEach(button => {

    button.addEventListener('click', (e) => operate(e.target.value))
    
})

buttonDecimal.addEventListener('click', () => {

    clearDisplay()  
    writeDecimal()

})


window.addEventListener('keydown', (e) => {

    const character = getKeyboardNumbers().find(element => element === e.key)  
    if(character){

        clearDisplay() 

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
        first = parseFloat(display.textContent)
        count = 0
    }

}

function saveSecondNumber(){
    if(display.textContent){
        second = parseFloat(display.textContent)
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

function checkDecimal(){

    const displayArray = display.textContent.split('')
    let count = displayArray.reduce((obj, item) =>  {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
    
    if(count['.'] > 0)
        return true
    return false

}

function writeDecimal(){

    if(!checkDecimal()){

        if(count == 0) 
            display.textContent = '0' 

        display.textContent = `${display.textContent}.`
        count++
    }

}

function clearDisplay(){
    if(count == 0) 
        display.textContent = '' 
}