import React from 'react'
import Button from '../Button/Button'

export default function Card() {
    return (
        <div className="card">
            <div className="card-title">TEST TITLE</div>
            <div className="advice">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <img
                src="images/pattern-divider-desktop.svg"
                alt="divider"
                className="divider"
            />
            <Button />
        </div>
    )
}
