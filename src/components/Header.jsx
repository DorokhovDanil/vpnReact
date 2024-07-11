import './../index.css';
import { NavLink} from "react-router-dom";
import microsoft from "./../images/microsoft.svg"
import telegram from "./../images/telegramm.svg"
const Header=()=> {
  return (
    <header>
    <div class="container">
        <div class="header_content">
            <div class="control_panel">
                <NavLink to='/' className="nav_menu_but_img">
                    <button class="nav_menu_but_img">
                        <img src={microsoft} alt="text"></img>
                        <span>Control panel</span>
                    </button>
                </NavLink>
            </div>
        </div>    
        <div class="header_content">
            <div class="nav_menu">
                 <NavLink  to='/maglink' className="nav_menu_but_img">
                    <button class="nav_menu_but_img">
                        <span>about</span>
                    </button>
                </NavLink>
                <NavLink  to='/userProfile' className="nav_menu_but_img">
                    <button class="nav_menu_but_img">
                    <span>download</span>
                    </button>
                </NavLink>
                <NavLink  to='' className="nav_menu_but_img">
                <button class="nav_menu_but_img">
                    <img src={telegram} alt="text"></img>
                    <span>help</span>
                </button>
                </NavLink>
                <NavLink to='/buy' className="nav_menu_but_img" >
                    <button class="nav_menu_but_img">
                    <span>buy a key</span>
                    </button>
                </NavLink>
            </div>
            <div class="humb">
                <button class="nav_menu_but_humb">
                    <span>menu</span>
                </button>

                <div class="nav_menu_hamb">
                    <button class="nav_menu_but_img">
                        <span>about</span>
                    </button>
                    <button class="nav_menu_but_img">
                        <a href="./view.html"><span>download</span></a>
                    </button>
                    <button class="nav_menu_but_img">
                        <img src={telegram} alt="text"></img>
                        <span>help</span>
                    </button>
                    <button class="nav_menu_but_img">
                        <a href="./buy.html"><span>buy a key</span></a>
                    </button>
                </div>

            </div>
            

        </div>
    </div>
    
    </header>
  );}

export default Header;  