import React from 'react'
import './scroll.css'

function Scroll(props) {
    return (
        <div className="scrollbox">
            {props.children}
        </div>
    )
}


export default Scroll