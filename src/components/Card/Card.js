import React from 'react'
import { useState } from 'react'
import useFetchAdvice from '../../helpers/useGetAdvice'
import Advice from '../Advice/Advice'
import Divider from '../Divider/Divider'
import Button from '../Button/Button'
import './Card.css'

export default function Card() {
    const [adviceCounter, setAdviceCounter] = useState(1);
    const { advice, isLoading, error } = useFetchAdvice(adviceCounter);

    return (
        <div className="card">
            <Advice
                adviceCounter={adviceCounter}
                advice={advice}
                isLoading={isLoading}
                error={error}
            />
            <Divider />
            <Button
                adviceCounter={adviceCounter}
                setAdviceCounter={setAdviceCounter}
            />
        </div>
    )
}
