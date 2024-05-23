import { useState } from 'react';
import { Button } from '../Button';

type CounterProps = {
    color?: string;
};

const Counter = ({ color }: CounterProps) => {
    const [count, setCount] = useState(0);

    const handleClick = (type: 'increment' | 'decrement') => {
        setCount((prev) => (type === 'increment' ? prev + 1 : prev - 1));
    };

    return (
        <>
            <span style={{ color }}>Counter: {count}</span>
            <br />
            <Button label="+" backgroundColor="#2b86" onClick={() => handleClick('increment')} />
            <Button label="-" backgroundColor="#2b86" onClick={() => handleClick('decrement')} />
        </>
    );
};

export default Counter;
