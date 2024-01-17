import React from 'react';

interface StepperProps {
    qty: number;
    decrementQty: () => void;
    incrementQty: () => void;
}

const Stepper: React.FC<StepperProps> = ({ qty, decrementQty, incrementQty }) => {
    return (
        <div className="mds-product-quantity">
            <button onClick={decrementQty}>-</button>
            <input readOnly type="text" value={qty} />
            <button onClick={incrementQty}>+</button>
        </div>
    );
};

export default Stepper;
