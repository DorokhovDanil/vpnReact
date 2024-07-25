<<<<<<< HEAD
import './../index.css';
import { useState } from "react";
import Input from './Input.jsx'
import MainLogo from './MainLogo.jsx';
import DefaulButton from './DefaultButton.jsx';
import {handleSubmit} from './EmailForm.jsx'
import BuyForm from './BuyForm.jsx';

const Buy=()=> {

    const [email,setEmail]=useState("")
  return (
    <div class="content">

   

    <body>
       
        <div  class="buy_promo">
       
            <BuyForm/>

            
            
        

        
        </div>
        <MainLogo/>
        

    </body>

    
   
</div>
  );
}

=======
import './../index.css';
import { useState } from "react";
import Input from './Input.jsx'
import MainLogo from './MainLogo.jsx';
import DefaulButton from './DefaultButton.jsx';
import {handleSubmit} from './EmailForm.jsx'
import BuyForm from './BuyForm.jsx';

const Buy=()=> {

    const [email,setEmail]=useState("")
  return (
    <div class="content">

   

    <body>
       
        <div  class="buy_promo">
       
            <BuyForm/>

            
            
        

        
        </div>
        <MainLogo/>
        

    </body>

    
   
</div>
  );
}

>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
export default Buy;