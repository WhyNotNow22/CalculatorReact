import React from 'react'
import Calculator from '../Calculator'


class CalculatorContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            display: '0',
            first: '',
            operation: '',
        }
    }

    onClick = event => {
        const button = event.target.closest('BUTTON');
        if (button) {
            if (button.value === '=') this.calculate();
            if (button.value === 'AC') this.clearDisplay();
            if (button.value === '±') this.changeSign();
            if (button.value.match(/[-+X\/]/g)) this.changeOperation(button.value);
            if (button.value === '.') this.fraction();
            if (button.value.match(/[0-9]/g)) {
                this.setState(prevState => {
                    return {
                        display: (this.state.display === '0') ? button.value : prevState.display + button.value,
                    }
                });
            }
        }
    }

    fraction = () => {
        console.log('fraction')
        this.setState(prev => {
            const { display } = prev;
            if (!String(display).includes('.')) {
                return {
                    display: display + '.',
                }
            }
        })
    }

    calculate = () => {
        this.setState(prev => {
            const { display, first, operation } = prev;
            let result = 0;
            switch (operation) {
                case '+': result = +first + +display;
                    break;
                case '-': result = first - display;
                    break;
                case '/': result = first / display;
                    break;
                case 'X': result = first * display;
                    break;
            }
            return {
                display: display,
                first: result,
            }
        })
    }

    changeOperation = (operation) => {
        this.setState(prev => {
            return {
                display: '0',
                first: prev.first || prev.display,
                operation: operation,
            }
        });
    }

    clearDisplay = () => {
        this.setState({
            display: '0',
            first: '',
            operation: '',
        })
    }

    changeSign = () => {
        this.setState(prevState => {
            const { display } = prevState;
            return {
                display: display * (-1),
            }
        });
    }

    render() {
        const displayFields = this.state;
        return (
            <Calculator displayFields={displayFields} onClick={this.onClick} />
        )
    }
}

export default CalculatorContainer
