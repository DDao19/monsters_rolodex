import React from 'react'
import './card.styles.css'

function Card(props) {
    return (
        <div className="card-container">
            <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&180x180`} />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card