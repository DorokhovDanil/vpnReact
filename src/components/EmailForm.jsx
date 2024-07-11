import './../index.css';
import { useState } from "react";
import Input from './Input.jsx'
import { setUser } from '../reducers/userReducer.js';
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import DefaulButton from './DefaultButton.jsx';
import {sendEmail} from './../action/mainAction.js'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import key_logo from './../images/key_logo.svg'
import Mail from "./../images/Mail.svg"
function EmailForm(){
    const [email,setEmail]=useState("")
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await sendEmail(email)
            dispatch(setUser(data));
            //под тон переделать, смотря что там будет сохраняться, в виде токена
            localStorage.setItem("accessToken", data.token);
            navigate("/...");
        } catch (e) {
            if (e instanceof AxiosError) {
                if (e.response?.data?.errors?.errors) {
                    e.response?.data?.errors?.errors?.forEach((error) => {
                        toast.error(`${error?.path}: ${error?.msg}`);
                    })
                } else {
                    toast.error(e.response?.data?.message);
                }
            } else {
                toast.error(e.message);
            }
        } finally {
            setLoading(false);
        }
    }
return(
    <div class="buy_promo">
       
            <div onSubmit={handleSubmit} class="buy_exe">
                <div class="header_key">
                    <div class="title_key">
                        <img src={key_logo} alt=""></img>
                        <p>login.exe</p>
                    </div>
                </div>
    
                <div class="body_control">
                    <div class="logo_key">
                        <img src={Mail} alt=""></img>
                    </div>
                    <div class="descr_but_buy_header">
                        We will send you the key on email
                    </div>

                    
                    <div class="input_email">
                    <Input type="email" value={email} setValue={setEmail} placeholder="your email..."></Input>
                    </div>
    
                    <div class="button_login">

                        <DefaulButton text='get a magic link'/>
                        
                        
                            
                        
                    </div>
                </div>
            </div>
    </div>
)
}

export default EmailForm;