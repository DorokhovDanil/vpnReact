<<<<<<< HEAD
import './../index.css';
import durev_logo from './../images/durev_logo.svg'
import preview01 from "./../images/preview-01.svg"
import preview02 from "./../images/preview-02.svg"
import key_logo from "./../images/key_logo.svg"
import key_body from "./../images/key_body.svg"
import andr_apk from "./../images/andr_apk.svg"
import app_store from "./../images/app_store.svg"
import google_play from "./../images/google_play.svg"
import DefaultButton from './DefaultButton';
import ImgButton from './ImgButton';
import Card from './Card';

const Main=()=> {
    
  return (
    <div class="content">
    
    <body>
    
    <div class="main_promo">
        <div class="container_promo">
    
            <div class="promo_durev">
                <div class="content_vpn">
                    <div class="title_logo">
                        <img src={durev_logo} alt=""></img>
                        <p>durev VPN</p>
                    </div>
                    <div class="descr">
                        <p>This VPN made bu durev for all durev fans and great people</p>
                    </div>
                </div>
                
            </div>
            
            <div class="screens">
                <div class="preview1">
                    <img src={preview01} alt=""></img>
                </div>
                <div class="preview2">
                    <img src={preview02} alt=""></img>
                </div>
            </div>

        
        </div>
    </div>

    <div class="main_promo2">
        <div class="key_exe">
            <div class="header_key">
                <div class="title_key">
                    <img src={key_logo} alt=""></img>
                    <p>key.exe</p>
                </div>
            </div>

            <div class="body_key">
                <div class="logo_key">
                    <img src={key_body} alt=""></img>
                </div>

                <div class="button_key">
                    <DefaultButton text="buy a key" />
                    <DefaultButton text="download VPN" />
                </div>
            </div>
        </div>
    </div>

    <div class="main_promo3">
        <div class="container">
            <div class="choose">
                <div class="desr_choose">
                    <p>choose your freedom now</p>
                </div>

                <div class="cards">
                    <Card 
                        textHeader='2 years - best' 
                        textSave='SAVE 62%'
                        textSum='$1.99'
                        butSum='buy $47 now'
                        classHeader='header_card1'
                    />

                    
                    <Card 
                        textHeader='1 year' 
                        textSave='SAVE 44%'
                        textSum='$2.99'
                        butSum='buy $36 now'
                        classHeader='header_card2'
                    />
                    <Card 
                        textHeader='6 months' 
                        textSave='SAVE 30%'
                        textSum='$3.99'
                        butSum='buy $24 now'
                        classHeader='header_card2'
                    />
                </div>
            </div>
        </div>

        <div class="container">
            
            <div class="freedom">
                <div class="desr_choose">
                    <p>download your freedom now</p>
                </div>
                <div class="footer_buttons">
                    <ImgButton text="Download .APK" img={andr_apk}/>
                    <ImgButton text="App Store" img={app_store}/>
                    <ImgButton text="Google Play" img={google_play}/>   
                </div>

            </div>
        </div>

    </div>

    

    
    </body>
   
</div>
  );
}

export default Main;
=======
import './../index.css';
import durev_logo from './../images/durev_logo.svg'
import preview01 from "./../images/preview-01.svg"
import preview02 from "./../images/preview-02.svg"
import key_logo from "./../images/key_logo.svg"
import key_body from "./../images/key_body.svg"
import andr_apk from "./../images/andr_apk.svg"
import app_store from "./../images/app_store.svg"
import google_play from "./../images/google_play.svg"
import DefaultButton from './DefaultButton';
import ImgButton from './ImgButton';
import Card from './Card';

const Main=()=> {
    
  return (
    <div class="content">
    
    <body>
    
    <div class="main_promo">
        <div class="container_promo">
    
            <div class="promo_durev">
                <div class="content_vpn">
                    <div class="title_logo">
                        <img src={durev_logo} alt=""></img>
                        <p>durev VPN</p>
                    </div>
                    <div class="descr">
                        <p>This VPN made bu durev for all durev fans and great people</p>
                    </div>
                </div>
                
            </div>
            
            <div class="screens">
                <div class="preview1">
                    <img src={preview01} alt=""></img>
                </div>
                <div class="preview2">
                    <img src={preview02} alt=""></img>
                </div>
            </div>

        
        </div>
    </div>

    <div class="main_promo2">
        <div class="key_exe">
            <div class="header_key">
                <div class="title_key">
                    <img src={key_logo} alt=""></img>
                    <p>key.exe</p>
                </div>
            </div>

            <div class="body_key">
                <div class="logo_key">
                    <img src={key_body} alt=""></img>
                </div>

                <div class="button_key">
                    <DefaultButton text="buy a key" />
                    <DefaultButton text="download VPN" />
                </div>
            </div>
        </div>
    </div>

    <div class="main_promo3">
        <div class="container">
            <div class="choose">
                <div class="desr_choose">
                    <p>choose your freedom now</p>
                </div>

                <div class="cards">
                    <Card 
                        textHeader='2 years - best' 
                        textSave='SAVE 62%'
                        textSum='$1.99'
                        butSum='buy $47 now'
                        classHeader='header_card1'
                    />

                    
                    <Card 
                        textHeader='1 year' 
                        textSave='SAVE 44%'
                        textSum='$2.99'
                        butSum='buy $36 now'
                        classHeader='header_card2'
                    />
                    <Card 
                        textHeader='6 months' 
                        textSave='SAVE 30%'
                        textSum='$3.99'
                        butSum='buy $24 now'
                        classHeader='header_card2'
                    />
                </div>
            </div>
        </div>

        <div class="container">
            
            <div class="freedom">
                <div class="desr_choose">
                    <p>download your freedom now</p>
                </div>
                <div class="footer_buttons">
                    <ImgButton text="Download .APK" img={andr_apk}/>
                    <ImgButton text="App Store" img={app_store}/>
                    <ImgButton text="Google Play" img={google_play}/>   
                </div>

            </div>
        </div>

    </div>

    

    
    </body>
   
</div>
  );
}

export default Main;
>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
