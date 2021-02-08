import './style.css'
import Display from '../Display'
import Buttons from '../Buttons'

function Calculator(props) {
    const { displayFields, onClick } = props;
    return (
        <div className='calculator-container'>
            <Display displayFields={displayFields} />
            <Buttons onClick={onClick} />
        </div>
    )
}

export default Calculator
