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

export default Buy;