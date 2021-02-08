import React, { useEffect, useRef, useState } from 'react'
import './style.css'

function Display({ displayFields }) {

    const [size, updateSize] = useState(100)
    const displayRef = useRef(null);
    const displayContainer = useRef(null);
    const displayResult = useRef(null);

    useEffect(() => {
        displayRef.current.style.fontSize = size + 'px';
        displayResult.current.style.fontSize = size + 'px';;
        if (displayRef.current.scrollWidth > displayContainer.current.clientWidth) {
            updateSize(prev => prev * 0.7);
        } 
    });

    const { display, first } = displayFields;
    return (
        <div ref={displayContainer} className='display'>
            <span ref={displayResult} className='history'>{first}</span>
            <span ref={displayRef}>{display}</span>
        </div>
    )
}

export default Display
