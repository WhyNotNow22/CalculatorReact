import './style.css'
import Display from '../Display'
import Buttons from '../Buttons'

function Calculator(props) {
    const { display, onClick } = props;
    return (
        <div className='calculator-container'>
            <Display display={display}/>
            <Buttons onClick={onClick}/>
        </div>
    )
}

export default Calculator
