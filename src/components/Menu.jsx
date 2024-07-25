import React from "react";
import telegram from "./../images/telegramm.svg";
import { NavLink } from "react-router-dom";
const Menu = ({ items, active, setActive }) => {
	return (
		<div
			class={active ? "nav_menu_hamb active" : "nav_menu_hamb"}
			onClick={() => setActive(false)}
		>
			{/* <NavLink to="/maglink">
				<button class="nav_menu_but_img">
					<span>about</span>
				</button>
			</NavLink> */}
			<NavLink to="/userProfile">
				<button class="nav_menu_but_img">
					<span>download</span>
				</button>
			</NavLink>
			<NavLink to="">
				<button class="nav_menu_but_img">
					<img src={telegram} alt="text"></img>
					<span>help</span>
				</button>
			</NavLink>
			<NavLink to="/buy">
				<button class="nav_menu_but_img">
					<span>buy a key</span>
				</button>
			</NavLink>
		</div>
	);
};

export default Menu;
