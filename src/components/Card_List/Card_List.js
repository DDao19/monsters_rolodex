import React from 'react'

import Card from '../Card/Card.js'
import './card_list.styles.css'

function Card_List(props) {
    return (
        <div className="card_list">
            {props.monsters.map(monster => 
                <Card key={monster.id} monster={monster} />
            )}
        </div>
    )
}

export default Card_List