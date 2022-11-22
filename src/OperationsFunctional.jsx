import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function OperationsFunctional() {

    const [operationValue, setOperationValue] = useState({ value: 0 })

    const handleChange = e => {
        setOperationValue({ value: parseInt(e.target.value) });
    }

    const sum = () => {
        setOperationValue({ value: operationValue.value + 1 });
    }
    const rest = () => {
        setOperationValue({ value: operationValue.value - 1 });
    }
    const mult = () => {
        setOperationValue({ value: operationValue.value * 2 });
    }
    const div = () => {
        setOperationValue({ value: operationValue.value / 2 });
    }
    const reset = () => {
        setOperationValue({ value: 0 });
    }

    return (
        <div>
            <Link to="/" className="btn btn-warning" >Back</Link>
            <input type="number" name="num" className='' onChange={handleChange} />
            <input type="button" value="+1" onClick={sum} />
            <input type="button" value="-1" onClick={rest} />
            <input type="button" value="×2" onClick={mult} />
            <input type="button" value="÷2" onClick={div} />
            <input type="button" value="reset" onClick={reset} />
            <h1>{operationValue.value}</h1>
        </div>
    )
}
