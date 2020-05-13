import React, {useState} from 'react'
import Count from './Count'
import Button from './Button'

function Counter() {

    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    return (
        <div className='counter'>
            <h3>{feedback}</h3>
            <Count count={count}/>
            <Button clickHandler={() => setCount(count + 1)}/>
        </div>
    );
}

export default Counter