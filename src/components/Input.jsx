import React from 'react'
import './../index.css';

const Input=({ setValue, value, type, style, placeholder})=>{
    return(
        <input 
            style={style}
            onChange={(event) => setValue(event.target.value)} 
            className='input_'
            value={value} 
            type={type}
            placeholder={placeholder}
            
        />
    )
}

export default Input;