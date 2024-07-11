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

export default DefaulButton;