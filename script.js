const clcScreen = document.querySelector('.clc-screen')

const updateScreen = (number) => {
    clcScreen.value = number
}
const numbers = document.querySelectorAll('.number')

let prevNumber = ''
let calculationNumber = ''
let currentNumber = ''

const inputNumber = (number) => {
   if (currentNumber === '0') {
    currentNumber = number
   } else {
    currentNumber += number
   }
}
numbers.forEach((number) =>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll('.operator')

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber= ''
}
operators.forEach((operator) => {
    operator.addEventListener("click",(event) => {
        updateScreen(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break 
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break    
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break                      
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber='0'
}
clearBtn.addEventListener("click", () =>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
