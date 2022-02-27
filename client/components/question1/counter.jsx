import { Button } from '../common/button';
import { useState, useEffect } from 'react';
// stole the button from the starter app
export const Counter = ({min,max}) => {
    const [count, setCount] = useState(0);
    useEffect(()=>{

    });
    const minus = () => {
        if (count == min) return;
        else {setCount(count-1);}
    };
    const plus = () => {
        if (count == max) return;
        else {setCount(count+1);}
    };
    if (min > 0 && count === 0) setCount(min);
    if (max < 0 && count === 0) setCount(max);
    return (
        <div className="border-2 rounded p-4">
            <div className="content-center">{count}</div>
            <Button onClick={minus}>-</Button>
            <Button onClick={plus}>+</Button>

        </div>
    );
};
