import React, { useState } from 'react'
import SearchContext from './searchContext'

const SearchProvider = (props) => {
    const [input, setInput] = useState('');
    const [mainData, setMainData] = useState([]);
    const [mode, setMode] = useState(false);


    const handleInput = (value) => {
        setInput(value);
    }

    return (
        <SearchContext.Provider value={{ input, handleInput, mode, setMode, mainData, setMainData }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;