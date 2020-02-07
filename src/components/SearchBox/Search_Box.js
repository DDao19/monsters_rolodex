import React from 'react'

import './search_box.styles.css'

function Search_Box({ placeholder, handleChange }) {
    return(
        <input 
        className="search"
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}
        />
    )
}

export default Search_Box