const numberButtons = document.querySelectorAll('[data-key]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const calcButton = document.querySelector('[data-calc]');

const output = document.querySelector('h2');





class Calculator {
    constructor(output) {
        this.output = output

    }
    operation(sign, x, y) {
        switch (sign) {

            case '+':
                return x + y;
                break;


            case '-':
                return x - y;
                break;


            case '*':
                return x * y;
                break;

            case '÷':
                return x / y;
                break;

        }
    }


    clear() {

        this.currentOperation = ''
        this.output.innerHTML = ''

    }


    appendNumber(number) {
        if (number === '.' && this.currentOperation.includes('.')) return;
        this.currentOperation = this.output.innerHTML + number;
    }


    appendOperator(operator) {
        this.appendNumber(" " + operator + " ")
    }


    delete() {

        if (this.currentOperation.toString().slice(-1) === ' ') {

            this.currentOperation = this.currentOperation.toString().slice(0, -3);

            return
        }
        this.currentOperation = this.currentOperation.toString().slice(0, -1);


    }


    updateOutput() {
        this.output.innerHTML = this.currentOperation;
    }


    calc() {

        let j = 0
        this.input = this.currentOperation.split(" ")
        for (let i = 0; i < this.input.length; i++) {

            if (isNaN(+this.input[i])) {
                if (!this.input[i + 1]) {
                    this.clear()
                    return;
                }

                if (!j) {
                    console.log(this.input[i + 1])
                    this.currentOperation = this.operation(this.input[i], +this.input[i - 1], +this.input[i + 1])
                }

                else {
                    this.currentOperation = this.operation(this.input[i], +this.currentOperation, +this.input[i + 1])


                }
                j++
            }
        }
    }
}


const calculator = new Calculator(output)





numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // calculator.clear()
        calculator.appendNumber(button.innerHTML)
        calculator.updateOutput();
    });
})
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {

        calculator.appendOperator(button.innerHTML)
        calculator.updateOutput();
    });
})


clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateOutput()
})

calcButton.addEventListener('click', () => {
    calculator.calc()
    calculator.updateOutput()
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateOutput()
})