import React, { Fragment } from 'react'

export default function Advice({ adviceCounter, advice, isLoading, error }) {
    console.log(error);
    return (
        <Fragment>
            {isLoading
                ?
                <Fragment>
                    <div className="card-title">Loading...</div>
                    <div className="advice">Loading....</div>
                </Fragment>
                :
                <Fragment>
                    <div className="card-title">Advice # {advice.slip.id}</div>
                    <div className="advice">{advice.slip.advice}</div>
                </Fragment>
            }
        </Fragment>
    )
}
