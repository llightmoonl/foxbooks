function Footer(){
    return(
        <footer id = "footer-container">
			  <div className = "fixed-container">
				  <div className = "logo-footer"><img src = "contents/logo/logo.png" alt = "logo"/></div>
				  <ul id = "flex-footer-button">

					  <li>
						  <ul id = "footer-button-container">
							  <li id = "footer-heading-title">Информация</li>
							  <li className = "footer-button">О компании</li>
							  <li className = "footer-button">Контакты</li>
							  <li className = "footer-button">Служба поддержки</li>
							  <li className = "footer-button">Возврат</li>
						  </ul>
					  </li>

					  <li>
						  <ul id = "footer-button-container">
							  <li id = "footer-heading-title">Сотрудничество</li>
							  <li className = "footer-button">Издательствам</li>
							  <li className = "footer-button">Авторам</li>
							  <li className = "footer-button">Библиотекам</li>
							  <li className = "footer-button">Партнерам</li>
						  </ul>
					  </li>

					  <li>
						  <ul id = "footer-button-container">
							  <li id = "footer-heading-title">Что почитать?</li>
							  <li className = "footer-button">Бестселлеры</li>
							  <li className = "footer-button">Скоро в продаже</li>
							  <li className = "footer-button">Популярные авторы</li>
						  </ul>
					  </li>

					  <li>
						  <ul id = "footer-button-container">
							  <li id = "footer-heading-title">Теплый лис в соц.сетях:</li>
							  <li className = "footer-button">
								  <ul className = "footer-button-social">
									  <li className = "button-social"><a href = "https://vk.com/wfoxbooks" target="_blank_"><img src = "contents/social media/vk.png" alt = "vk"/></a></li>
									  <li className = "button-social"><a href = "https://www.instagram.com/w.foxbooks/" target="_blank_"><img src = "contents/social media/instagram.png" alt = "instagram"/></a></li>
									  <li className = "button-social"><a href = "https://twitter.com/wfoxbooks" target="_blank_"><img src = "contents/social media/twitter.png" alt = "twitter"/></a></li>
									  <li className = "button-social"><a href = "https://t.me/wfoxbooks" target="_blank_"><img src = "contents/social media/telegram.png" alt = "telegram"/></a></li>
								  </ul>
							  </li>
						  </ul>
					  </li>
				  </ul>
				  <hr className = "hr-class"/>
				  <div className = "Copyright">Copyright © 2021. Light Moon Inc. All rights reserved.</div>
				</div>
			</footer>
    );
}

export default Footer;