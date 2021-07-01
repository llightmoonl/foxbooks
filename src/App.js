import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppContext from './components/context.js';

import Header from './components/Header.js';
import Drawer from './components/Drawer.js';
import MenuContainer from './components/MenuContainer.js';
import Card from './components/Card';
import Footer from './components/Footer.js';
import CarouselContainer from './components/CarouselContainer.js';
import Marketplace from './components/Marketplace.js';


function App() {
	const [itemsA, setItemsA] = React.useState([
		{"id": "0","title": "Продукты 24", "artist": "Виталий Терлецкий", "price": 350, "imageURL": "contents/product/1.jpg"},
		{"id": "1","title": "Герои Толкина", "artist": "Дэвид Дэй", "price": 990, "imageURL": "contents/product/2.jpg"},
		{"id": "2","title": "Майор Гром. Чумной Доктор", "artist": "Артем Габрелянов", "price": 390, "imageURL": "contents/product/3.jpg"},
	   	{"id": "3","title": "Токийский гуль. Том 5", "artist": "Суи Исида", "price": 350, "imageURL": "contents/product/4.jpg"},
		{"id": "4", "title": "Ведьмак", "artist": "Анджей Сапковский", "price": 1290, "imageURL": "contents/product/5.jpg"},
		{"id": "5", "title": "Лисья Нора", "artist": "Нора Сакавич", "price": 229, "imageURL": "contents/product/6.jpg"},
	   	{"id": "6","title": "Дева в саду", "artist": "Антония Сьюзен Байетт", "price": 590, "imageURL": "contents/product/7.jpg"},
		{"id": "7","title": "Обещанная страна грез. Том 3", "artist": "Кайу Сирай", "price": 790, "imageURL": "contents/product/8.jpg"}
	]);
	
	const [cartItems, setCartItems] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCardOpened] = React.useState(false);
	const [menuOpened, setMenuOpened] = React.useState(false);

	const onAddCart = (obj) =>{
		setCartItems((prev)=>[...prev,obj]);
	}
	const onRemoveItem = (id) =>{
		setCartItems((prev)=>prev.filter((item)=>item.id !== id))
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	}

  return (
	<AppContext.Provider
	value={{
	  itemsA,
	  cartItems,
	  onAddCart,
	  setCardOpened,
	  setCartItems,
	}}>
  <>
    <div id = "wrapper">
		
		{menuOpened && <MenuContainer onCloseMenu= {()=> setMenuOpened(false)}/>}
		{cartOpened && <Drawer itemsA = {cartItems} onCloseCart= {()=> setCardOpened(false)} onRemove ={onRemoveItem}/>}
		<Header onClickCart= {()=> setCardOpened(true)} onClickMenu = {()=> setMenuOpened(true)}/>

		<main className = "main-container">
			<div className = "fixed-container">

				<CarouselContainer/>

				<div className = "button-main">
					<h2>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все книги'}</h2>
					<div className = "search-input">
						<button className = "search-button"><img src = "contents/interface/search.png" alt = "search"/></button>
						<input onChange = {onChangeSearchInput} value = {searchValue} className = "search-text" placeholder = "Поиск"></input>
						{searchValue && <div className = "search-button-clear">
							<button onClick = {()=> setSearchValue('')} className = "search-clear">
								<img src = "contents/interface/close.png"/>
							</button>
						</div>}
					</div>
				</div>

				<div className = "flex-main-container">
					{itemsA.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index)=>
						(
							<Card
							key = {index}
							title = {item.title}
							artist = {item.artist}
							price = {item.price}
							imageURL ={item.imageURL}
							onPlus = {(obj)=>onAddCart(item)}
							/>
						)
					)}
				</div>	
				<Marketplace/>
			</div>
		</main>
		<Footer/>
	</div>
	
  </>
  </AppContext.Provider>
  );
}

export default App;
