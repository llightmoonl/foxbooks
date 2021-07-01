import React from 'react';
import styles from './Card.module.css';

function Card({id,imageURL, title, artist, price, onPlus}){
	const [isAdded, setIsAdded] = React.useState(false);

	const[isLike, setLike] = React.useState(false);

	const onClickPlus = () =>{
		onPlus({id,imageURL, title, artist});
		setIsAdded(!isAdded);
		alert("Товар добавлен в корзину");
	}

	const onClickLike = () =>{
		setLike(!isLike)
	}
    return(
        <div className = {styles.maincontent}>

        <div className = {styles.imgmaincontent}>
		    <img src = {imageURL} alt = "product"/>
	    </div>

	    <div className = {styles.likemaincontent}>
		    <img onClick = {onClickLike} src = {isLike ? "contents/interface/like-count-active.png" : "/contents/interface/like-count.png"} alt = "like"/>
	    </div>

        <div className = {styles.infomaincontent}>
		    <div className = {styles.textmaincontent}>{title}</div>
		    <div className = {styles.artistmaincontent}>{artist}</div>
	    </div>

	    <div className = {styles.buymaincontent}>
		    <div className = {styles.pricemaincontent}>{price} ₽</div>
		    <div className = {styles.buttonmainprops}>
		        <button className = {styles.buttonmaincontent} >
			        <img onClick = {onClickPlus} className = {styles.imgbuttoncontent} src = "contents/interface/cart-button.png" alt = "cart-button"/>
			    </button>
		    </div>
	    </div>

    </div>
    );
}

export default Card;