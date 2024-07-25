<<<<<<< HEAD
import React from 'react'
import './../index.css';
import { useState } from "react";
import key_logo from "./../images/key_logo.svg"
import DefaultButton from './DefaultButton';
const Card=({ textHeader, textSave, textSum, butSum,classHeader })=>{
    const [cardTextHeader, setCardTextHeader] = useState(textHeader);
    const [cardTextSave, setCardTextSave] = useState(textSave);
    const [cardTextSum, setCardTextSum] = useState(textSum);
    return(
        <div class="card1">
            <div class={classHeader}>
                <div class="title_card">
                    <img src={key_logo} alt=""></img>
                    <p>{cardTextHeader}</p>
                </div>
            </div>
            <div class="body_card">
                <div class="white_body_card">
                    <div class="save2">
                        {cardTextSave}
                    </div>
                    <div class="sum2">
                        {cardTextSum}
                    </div>
                    <div class="descr_save">
                        monthly
                    </div>
                    <div class="button_card">
                        <DefaultButton text={butSum} />
                    </div>
                </div>
            </div>

        </div>
    )
}

=======
import React from 'react'
import './../index.css';
import { useState } from "react";
import key_logo from "./../images/key_logo.svg"
import DefaultButton from './DefaultButton';
const Card=({ textHeader, textSave, textSum, butSum,classHeader })=>{
    const [cardTextHeader, setCardTextHeader] = useState(textHeader);
    const [cardTextSave, setCardTextSave] = useState(textSave);
    const [cardTextSum, setCardTextSum] = useState(textSum);
    return(
        <div class="card1">
            <div class={classHeader}>
                <div class="title_card">
                    <img src={key_logo} alt=""></img>
                    <p>{cardTextHeader}</p>
                </div>
            </div>
            <div class="body_card">
                <div class="white_body_card">
                    <div class="save2">
                        {cardTextSave}
                    </div>
                    <div class="sum2">
                        {cardTextSum}
                    </div>
                    <div class="descr_save">
                        monthly
                    </div>
                    <div class="button_card">
                        <DefaultButton text={butSum} />
                    </div>
                </div>
            </div>

        </div>
    )
}

>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
export default Card;