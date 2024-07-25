<<<<<<< HEAD
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

=======
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

>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
export default Input;