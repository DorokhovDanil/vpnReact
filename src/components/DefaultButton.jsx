<<<<<<< HEAD
import React from 'react'
import './../index.css';
import { useState } from "react";

const DefaulButton=({ text })=>{
    const [buttonText, setButtonText] = useState(text);
    return(
            <button className='buy_but'>
                <div className='descr_but'>
                    
                    {buttonText}
                </div>
            </button>
    )
}

=======
import React from 'react'
import './../index.css';
import { useState } from "react";

const DefaulButton=({ text })=>{
    const [buttonText, setButtonText] = useState(text);
    return(
            <button className='buy_but'>
                <div className='descr_but'>
                    
                    {buttonText}
                </div>
            </button>
    )
}

>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
export default DefaulButton;