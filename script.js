let nav = document.querySelector(`nav`);
let burger = document.querySelector(`#burger`);
//nav.innerHTML = `<menu><a class="menu_bottom" href="index.html">Главная</a><a class="menu_bottom" href="military.html">Склад</a><a class="menu_bottom" href="school.html">Школа</a><a class="menu_bottom" href="history.html">История</a><a class="menu_bottom" href="blackshop.html">Черный рынок</a><a class="menu_bottom" href="frame.html">Интеграции</a></menu>`;
burger.addEventListener('click', function(){
	if(burger.classList.contains('gg')){
		nav.innerHTML = ` `;
		burger.classList.remove('gg');
	}else{
		burger.classList.add('gg');
		nav.innerHTML = `<menu><a class="menu_bottom" href="index.html">Главная</a><a class="menu_bottom" href="military.html">Склад</a><a class="menu_bottom" href="school.html">Школа</a><a class="menu_bottom" href="history.html">История</a><a class="menu_bottom" href="blackshop.html">Черный рынок</a><a class="menu_bottom" href="frame.html">Интеграции</a></menu>`;

	}
}
);




/*
	nav.innerHTML = `<menu><a class="menu_bottom" href="index.html">Главная</a><a class="menu_bottom" href="military.html">Склад</a><a class="menu_bottom" href="school.html">Школа</a><a class="menu_bottom" href="history.html">История</a><a class="menu_bottom" href="blackshop.html">Черный рынок</a><a class="menu_bottom" href="frame.html">Интеграции</a></menu>`;
};
burger.addEventListener('click', function(){
	nav.innerHTML = `<!---->`;*/