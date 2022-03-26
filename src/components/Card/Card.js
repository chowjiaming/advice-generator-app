import React from 'react'
import Button from '../Button/Button'
import Divider from '../Divider/Divider'
import './Card.css'

export default function Card() {
    return (
        <div className="card">
            <div className="card-title">TEST TITLE</div>
            <div className="advice">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <Divider />
            <Button />
        </div>
    )
}
