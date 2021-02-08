import { Button } from '@material-ui/core'
import './style.css'

function Buttons(props) {
    const { onClick } = props;
    return (
        <div id='buttons-container' onClick={onClick}>
            <Button value='AC' className='top' fullWidth>AC</Button>
            <Button value='±' className='top' fullWidth>+/-</Button>
            <Button value='%' className='top' fullWidth>%</Button>
            <Button value='/' className='right' fullWidth>/</Button>
            <Button value='7' variant='contained' fullWidth>7</Button>
            <Button value='8' variant='contained' fullWidth>8</Button>
            <Button value='9' variant='contained' fullWidth>9</Button>
            <Button value='X' className='right' fullWidth>X</Button>
            <Button value='4' variant='contained' fullWidth>4</Button>
            <Button value='5' variant='contained' fullWidth>5</Button>
            <Button value='6' variant='contained' fullWidth>6</Button>
            <Button value='-' className='right' fullWidth>-</Button>
            <Button value='1' variant='contained' fullWidth>1</Button>
            <Button value='2' variant='contained' fullWidth>2</Button>
            <Button value='3' variant='contained' fullWidth>3</Button>
            <Button value='+' className='right' fullWidth>+</Button>
            <Button value='' fullWidth ></Button>
            <Button value='0' variant='contained' fullWidth>0</Button>
            <Button value='.' variant='contained' fullWidth>.</Button>
            <Button value='=' className='right' fullWidth>=</Button>
        </div>
    )
}

export default Buttons