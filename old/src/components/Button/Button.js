import { useState, Fragment } from 'react'
import './Button.css'

export default function Button({ setAdviceCounter }) {
    const [renderButton, setRenderButton] = useState(true);

    const handleClick = e => {
        console.log(`${e.type} at ${e.timeStamp}`);
        setAdviceCounter(prevState => {
            return prevState + 1;
        })
        setRenderButton(prevState => {
            return !prevState;
        })
        setTimeout(() => {
            setRenderButton(prevState => {
                return !prevState;
            })
        }, 2000);
    }
    return (

        <Fragment>
            {renderButton
                ?
                <div className="button" onClick={handleClick}>
                    <img
                        src="images/icon-dice.svg"
                        alt="advice-button"
                        className="button-image"
                    />
                </div>
                :
                <div className="button spin">
                    <img
                        src="images/icon-dice.svg"
                        alt="advice-button"
                        className="button-image"
                    />
                </div>
            }

        </Fragment>


    )
}
