import React, { Fragment } from 'react'

export default function Advice({ adviceCounter, advice, isLoading, error }) {
    if (error) {
        return (
            <Fragment>
                <div className="card-title">Error...</div>
                <div className="advice">Error....</div>
            </Fragment>
        )
    }
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
                    <div className="advice">{`"${advice.slip.advice}"`}</div>
                </Fragment>
            }
        </Fragment>
    )
}
