import React from 'react'
import './../index.css';
import { useState } from "react";

const ImgButton=({ text, img })=>{
    const [buttonText, setButtonText] = useState(text);
    return(
           



            <button class="but_footer">
                                    
            <div class="descr_but_footer">
                <img src={img} alt=""></img>
                {text}
            </div>
            </button>
    )
}

export default ImgButton;