import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from './context.js';

function Header(props){
	const {cartItems} = React.useContext(AppContext);
	const totalPrice = cartItems.reduce((sum, obj)=>obj.price + sum, 0);

    return(
        <header className = "header">
			<div className = "fixed-container">
				<div className = "flex-header-container">
					<div className = "menu-gamburger">
						<button onClick = {props.onClickMenu} className = "button-header">
							<img src = "contents/interface/menu-hamburger.png" alt="menu-foxbooks"/>
							<div className = "button-header-text">Каталог</div>
						</button>
					</div>
					
					<Link to = "/">
						<button className = "logo-button-header">
							<img src = "contents/logo/logo.png" alt = "foxbooks-logo"/>
						</button>
					</Link>

					<div className = "buttons-contents">
						<button onClick = {props.onClickCart} className = "button-header">
							<img src = "contents/interface/cart.png" alt="cart"/>
							<span className = "price-cart-button">{totalPrice} ₽</span>
						</button>
						
					</div>
				</div>			
			</div>
		</header>
    );
}

export default Header;