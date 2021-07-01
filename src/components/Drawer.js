import React from 'react';
import AppContext from "./context";

function Drawer({onCloseCart, itemsA = [], onRemove}){
	const {cartItems} = React.useContext(AppContext);
	const totalPrice = cartItems.reduce((sum, obj)=>obj.price + sum, 0);
    return(
        <div className = "overlay">
			<div className = "cart-page">
				<div className = "title-cart">
					<h2>Корзина</h2>
					<div className = "card-cart-button-close">
						<button className = "card-cart-close" onClick = {onCloseCart}>
							<img src = "contents/interface/close.png" alt = "close"/>
						</button>
					</div>
				</div>
				{
					itemsA.length > 0 ? (
						<>
						<div className = "items">
						{
							itemsA.map((obj)=>(
							<div className = "card-cart">
							<div className = "card-cart-img"><img src = {obj.imageURL} alt = "product"/></div>
	
							<div className = "card-cart-info">
								<div className = "card-cart-text-info">
									<div className = "card-cart-text">{obj.title}</div>
									<div className = "card-cart-artist">{obj.artist}</div>
									<div className = "card-cart-price">{obj.price} ₽</div>
								</div>
							</div>
	
							<div className = "card-cart-button-delete">
								<button onClick = {()=>onRemove(obj.id)} className = "card-cart-delete">
									<img src = "contents/interface/close.png"/>
								</button>
							</div>
						</div>
							))
						}
						</div>
					
					<div className = "TotalPrice">
					<ul className = "TotalPriceUl">
						<li className = "Total-Price-Flex">
							<span>Итого: </span>
							<div></div>
							<b>{totalPrice} ₽</b>
						</li>
						<li className = "Total-Price-Flex">
							<span>Налог 5%: </span>
							<div></div>
							<b>{(totalPrice/100)*5} ₽</b>
						</li>
					</ul>	
					<button class = "TotalPriceButton">Оформить заказ</button>
				</div></>)
				 : (
					<div className = "cart-empty">
						<img src = "contents/interface/cart-empty.png" alt = "cart-empty"/>
						<h3>Корзина пустая</h3>
						<div className = "cart-empty-text">Добавьте хотя бы один товар, чтоб сделать заказ</div>
						<button onClick = {onCloseCart} className = "cart-empty-back">Вернуться назад</button>
					</div>
				) 
				}
			</div>
		</div>
    ); 
}

export default Drawer;