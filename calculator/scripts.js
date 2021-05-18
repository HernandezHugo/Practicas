class Calculator {
    constructor(principalScreen, secundaryScreen) {
        this.principalScreen = principalScreen;
        this.secundaryScreen = secundaryScreen;
        this.clearScreen();
    }

    clearEntry() {
        this.currentOperand = '';

    }

    clearScreen() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    deleteAction() {
        this.currentOperand = this.currentOperand.slice(0, - 1);
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;

        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (number === '.' && this.currentOperand === '') this.currentOperand = '0';
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.principalScreen.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.secundaryScreen.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.secundaryScreen.innerText = '';
        }
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
}

const principalScreen = document.querySelector('.screen--principal');
const secundaryScreen = document.querySelector('.screen--secundary');

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');

const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');
const clearEntryButton = document.querySelector('.ce');
const clearButton = document.querySelector('.clear');

const calculator = new Calculator(principalScreen, secundaryScreen);

numbers.forEach(number => {
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerText);
        calculator.updateDisplay();
    })
})
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.chooseOperation(operator.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', button => {
    calculator.deleteAction();
    calculator.updateDisplay();
})
clearEntryButton.addEventListener('click', button => {
    calculator.clearEntry();
    calculator.updateDisplay();
})
clearButton.addEventListener('click', button => {
    calculator.clearScreen();
    calculator.updateDisplay();
})