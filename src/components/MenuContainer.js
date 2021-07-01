function MenuContainer({onCloseMenu}){
    return(
        <div className = "menu-overlay">
			<div className = "menu-page">
				<div className = "menu-title">
					<div className = "menu-title-text"><h2>Каталог</h2></div>
					<div className = "menu-title-close" onClick = {onCloseMenu}>
						<button className = "button-menu-title-close">
							<img src = "contents/interface/close.png" alt = "close"/>
						</button>
					</div>
				</div>
				<div className = "menu-items-catalog">
					<ul className = "menu-catalog-ul">
						<li className = "menu-catalog-li">Все книги жанра</li>
						<li className = "menu-catalog-li">Афоризмы</li>
						<li className = "menu-catalog-li">Басни</li>
						<li className = "menu-catalog-li">Детективы</li>
						<li className = "menu-catalog-li">Драматургия</li>
						<li className = "menu-catalog-li">Историческая драма</li>
						<li className = "menu-catalog-li">Классическая проза</li>
						<li className = "menu-catalog-li">Отчественный боевик</li>
						<li className = "menu-catalog-li">Поэзия</li>
						<li className = "menu-catalog-li">Приключения</li>
						<li className = "menu-catalog-li">Сентиментальная проза</li>
						<li className = "menu-catalog-li">Современная проза</li>
						<li className = "menu-catalog-li">Фантастика</li>
						<li className = "menu-catalog-li">Фэнтези</li>
						<li className = "menu-catalog-li">Эпос</li>
					</ul>
				</div>
				<div className = "other-menu-catalog">
					<ul className = "other-menu-ul">
						<li className = "other-menu-li">Уцененные товары</li>
						<li className = "other-menu-li">Подарочные сертификаты</li>
						<li className = "other-menu-li">Сервисы и услуги</li>
					</ul>
				</div>
			</div>
		</div> 
    )
}

export default MenuContainer;