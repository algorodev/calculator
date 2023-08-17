import {elements, operations} from './utils'

const {
    additionButton,
    cleanButton,
    commaButton,
    divisionButton,
    eightButton,
    fiveButton,
    fourButton,
    multiplicationButton,
    nineButton,
    oneButton,
    resultButton,
    screen,
    sevenButton,
    sixButton,
    subtractionButton,
    threeButton,
    twoButton,
    zeroButton
} = elements

const {
    addition,
    division,
    multiplication,
    subtraction
} = operations

let screenValue = ''
let firstNumber = ''
let operation = ''
let resultValue = ''

nineButton.addEventListener('click', () => addValueToScreen('9'))
eightButton.addEventListener('click', () => addValueToScreen('8'))
sevenButton.addEventListener('click', () => addValueToScreen('7'))
sixButton.addEventListener('click', () => addValueToScreen('6'))
fiveButton.addEventListener('click', () => addValueToScreen('5'))
fourButton.addEventListener('click', () => addValueToScreen('4'))
threeButton.addEventListener('click', () => addValueToScreen('3'))
twoButton.addEventListener('click', () => addValueToScreen('2'))
oneButton.addEventListener('click', () => addValueToScreen('1'))
zeroButton.addEventListener('click', () => addValueToScreen('0'))
commaButton.addEventListener('click', () => addValueToScreen('.'))
additionButton.addEventListener('click', () => addOperation('+'))
subtractionButton.addEventListener('click', () => addOperation('-'))
multiplicationButton.addEventListener('click', () => addOperation('*'))
divisionButton.addEventListener('click', () => addOperation('/'))
cleanButton.addEventListener('click', () => resetCalculator())

resultButton.addEventListener('click', () => {
    if (screenValue === '' && operation === '') return

    switch (operation) {
        case '+':
            resultValue = addition(+firstNumber, +screenValue) + ''
            break
        case '-':
            resultValue = subtraction(+firstNumber, +screenValue) + ''
            break
        case '*':
            resultValue = multiplication(+firstNumber, +screenValue) + ''
            break
        case '/':
            resultValue = division(+firstNumber, +screenValue) + ''
            break
    }

    enableControls()

    screen.innerHTML = `<h4>${resultValue}</h4>`
})

const addValueToScreen = (value) => {
    screenValue = screenValue + value
    screen.innerHTML = `<h4>${screenValue}</h4>`
}

const addOperation = (value) => {
    firstNumber = screenValue
    operation = value
    screenValue = ''

    additionButton.classList.add('control--disabled')
    divisionButton.classList.add('control--disabled')
    multiplicationButton.classList.add('control--disabled')
    subtractionButton.classList.add('control--disabled')

    screen.innerHTML = `<h4>${screenValue}</h4>`
}

const resetCalculator = () => {
    screenValue = ''
    firstNumber = ''
    operation = ''

    disableControls()

    screen.innerHTML = ''
}

const enableControls = () => {
    additionButton.classList.add('control--disabled')
    commaButton.classList.add('control--disabled')
    divisionButton.classList.add('control--disabled')
    eightButton.classList.add('control--disabled')
    fiveButton.classList.add('control--disabled')
    fourButton.classList.add('control--disabled')
    multiplicationButton.classList.add('control--disabled')
    nineButton.classList.add('control--disabled')
    oneButton.classList.add('control--disabled')
    resultButton.classList.add('control--disabled')
    screen.classList.add('control--disabled')
    sevenButton.classList.add('control--disabled')
    sixButton.classList.add('control--disabled')
    subtractionButton.classList.add('control--disabled')
    threeButton.classList.add('control--disabled')
    twoButton.classList.add('control--disabled')
    zeroButton.classList.add('control--disabled')
}

const disableControls = () => {
    additionButton.classList.remove('control--disabled')
    commaButton.classList.remove('control--disabled')
    divisionButton.classList.remove('control--disabled')
    eightButton.classList.remove('control--disabled')
    fiveButton.classList.remove('control--disabled')
    fourButton.classList.remove('control--disabled')
    multiplicationButton.classList.remove('control--disabled')
    nineButton.classList.remove('control--disabled')
    oneButton.classList.remove('control--disabled')
    resultButton.classList.remove('control--disabled')
    screen.classList.remove('control--disabled')
    sevenButton.classList.remove('control--disabled')
    sixButton.classList.remove('control--disabled')
    subtractionButton.classList.remove('control--disabled')
    threeButton.classList.remove('control--disabled')
    twoButton.classList.remove('control--disabled')
    zeroButton.classList.remove('control--disabled')
}
