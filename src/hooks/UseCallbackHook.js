import React, {useState, useCallback} from 'react';

// basic example
    // Without useCallback: Function is recreated on every render 
    // With useCallback: Function is memoized and only recreated if dependencies change 
 const BasicCounterExample = ()=>{
    const [num, setNum] = useState(0);
    const handleClick = useCallback(()=>{
        let count =0;
        console.log(`i am count from useCallback hook: ${count++}`); 
        console.log(`i am num from dependency value ${num}`)
        // count will not increase by onclick of any button because function memoized already.
    }, [num])

    return <>
        <h4>useCallback Example:</h4>
        <button onClick={handleClick}>Click me: </button>
        <button onClick={() => setNum(num + 1)}>Increment: {num}</button>  
    </>
}

export {BasicCounterExample};