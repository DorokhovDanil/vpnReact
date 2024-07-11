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
import buy_logo from "./../images/buy_logo.svg"
import kassa from "./../images/kassa.svg"
function BuyForm(){

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
    <div onSubmit={handleSubmit}class="buy_exe">
                <div class="header_buy">
                    <div class="title_buy1">
                        <img src={buy_logo} alt=""></img>
                        <p>buy.exe</p>
                    </div>
                </div>

                <div class="body_buy">
                    <div class="descr_but_buy_header">
                        We will send you the key on email
                    </div>

                    <div class="input_email">
                        <Input type="email" value={email} setValue={setEmail} placeholder="your email..."></Input>
                        {/* <input type="text" placeholder="your email..."></input> */}
                    </div>

                    <div class="years_buttons">

                        <div class="button_buy1">
                            <DefaulButton text='test'/>
                        </div>
                        <div class="button_buy2">
                            <DefaulButton text='1 month'/>
                        </div>

                        <div class="button_buy3">
                            <DefaulButton text='2 months'/>
                        </div>
                    </div>

                    <div class="years_buttons">

                        <div class="button_buy1">
                            <DefaulButton text='6 months'/>
                        </div>
                        <div class="button_buy2">
                            <DefaulButton text='1 year'/>
                        </div>

                        <div class="button_buy3">
                            <DefaulButton text='2 years'/>
                        </div>
                    </div>

                    <div class="save">
                         YOU SAVE 62%
                    </div>
                    <div class="sum">
                        $47
                    </div>

                    <div class="button_card_green">
                        <button class="buy_but_card">
                            <div class="descr_but_card">
                                <span>pay with a</span>
                                <img src={kassa} alt=""></img>
                            </div>
                        </button>
                    </div>

                    <div class="buy_footer_descr">
                        <p>By paying for a subscription, you agree with the policy of personal data </p>
                        <p>processing, with the contract of offer and with the agreement on joining the</p> 
                        <p>recurring payment system.</p>

                        <p>All subscriptions are renewed automatically, you can disable renewals in</p>
                        <p>your personal cabinet.</p>
                    </div>
                </div>
            </div>
)
};

export default BuyForm