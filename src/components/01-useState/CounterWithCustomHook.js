import React from 'react';
import useCounter from '../../hooks/useCounter';

import './Counter.css';

const CounterWithCustomHook = () => {

    const { state,increment,decrement,reset} = useCounter( 100);
            
    return (
        <>
            <h1>CounterWithHook: {state}</h1>  
            <hr/>
            <button 
                className="btn"
                onClick={increment}
            >
                +1
            </button>
            <button 
                className="btn "
                onClick={reset}
            >
                Reset  
            </button>
            <button 
                className="btn"
                onClick={decrement}
            >
                -1
            </button>
        </>
    )
}

export default CounterWithCustomHook
