import {addition, subtraction, multiplication, division} from './utils/operations.js'
import {
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
} from './utils/elements.js'

let screenValue = ''
let firstNumber = ''
let operation = ''
let resultValue = ''

nineButton.addEventListener('click', () => {
    screenValue = screenValue + '9'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

eightButton.addEventListener('click', () => {
    screenValue = screenValue + '8'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

sevenButton.addEventListener('click', () => {
    screenValue = screenValue + '7'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

sixButton.addEventListener('click', () => {
    screenValue = screenValue + '6'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

fiveButton.addEventListener('click', () => {
    screenValue = screenValue + '5'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

fourButton.addEventListener('click', () => {
    screenValue = screenValue + '4'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

threeButton.addEventListener('click', () => {
    screenValue = screenValue + '3'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

twoButton.addEventListener('click', () => {
    screenValue = screenValue + '2'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

oneButton.addEventListener('click', () => {
    screenValue = screenValue + '1'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

zeroButton.addEventListener('click', () => {
    screenValue = screenValue + '0'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

commaButton.addEventListener('click', () => {
    screenValue = screenValue + '.'
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

additionButton.addEventListener('click', () => {
    firstNumber = screenValue
    operation = '+'
    screenValue = ''
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

subtractionButton.addEventListener('click', () => {
    firstNumber = screenValue
    operation = '-'
    screenValue = ''
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

multiplicationButton.addEventListener('click', () => {
    firstNumber = screenValue
    operation = '*'
    screenValue = ''
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

divisionButton.addEventListener('click', () => {
    firstNumber = screenValue
    operation = '/'
    screenValue = ''
    screen.innerHTML = `<h4>${screenValue}</h4>`
})

cleanButton.addEventListener('click', () => {
    screenValue = ''
    firstNumber = ''
    operation = ''

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

    screen.innerHTML = `<h4>${screenValue}</h4>`
})

resultButton.addEventListener('click', () => {
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

    screen.innerHTML = `<h4>${resultValue}</h4>`
})
