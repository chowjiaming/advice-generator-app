import React from 'react'
import './Button.css'

export default function Button({ adviceCounter, setAdviceCounter }) {
    const handleClick = e => {
        setAdviceCounter(previousValue => {
            return previousValue + 1;
        })
    }
    return (
        <div className="button" onClick={handleClick}>
            <img
                src="images/icon-dice.svg"
                alt="advice-button"
                className="button-image"
            />
        </div>
    )
}
