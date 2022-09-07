meanhi = function (){
	if(burger.classList.contains('gg')){
		nav.innerHTML = ` `;
		burger.classList.remove('gg');
	}else{
		burger.classList.add('gg');
		nav.innerHTML = `<menu>
							<a class="menu_bottom" href="general.html">Главная</a>
							<a class="menu_bottom" href="military.html">Склад</a>
							<a class="menu_bottom" href="school.html">Школа</a>
							<a class="menu_bottom" href="history.html">История</a>
							<a class="menu_bottom" href="blackshop.html">Черный рынок</a>
							<a class="menu_bottom" href="frame.html">Интеграции</a>
						</menu>`;
	};
	const smbo = document.querySelector('#smbo');
	const smbt = document.querySelector('#smbt');
	const smbth = document.querySelector('#smbth');
		burger.removeEventListener('click', meanhi);
		burger.addEventListener('click', meanse);
		meanx(smbo, '45deg');
		meanx(smbth, '-45deg');
		smbt.style.display = 'none'
};
function meanse(){
	if(burger.classList.contains('gg')){
		nav.innerHTML = ` `;
		burger.classList.remove('gg');
	}else{
		burger.classList.add('gg');
		nav.innerHTML = `<menu>
							<a class="menu_bottom" href="general.html">Главная</a>
							<a class="menu_bottom" href="military.html">Склад</a>
							<a class="menu_bottom" href="school.html">Школа</a>
							<a class="menu_bottom" href="history.html">История</a>
							<a class="menu_bottom" href="blackshop.html">Черный рынок</a>
							<a class="menu_bottom" href="frame.html">Интеграции</a>
						</menu>`;
	};
	const smbo = document.querySelector('#smbo');
	const smbt = document.querySelector('#smbt');
	const smbth = document.querySelector('#smbth');
		for(i = 0; i <= 30; i++){
			let strike = String(i);
			smbo.style.width = strike + 'px';
			smbo.style.borderWidth = '2px';
			smbt.style.width = strike + 'px';
			smbt.style.borderWidth = '2px';
			smbth.style.width = strike + 'px';
			smbth.style.borderWidth = '2px';
		};
		burger.removeEventListener('click', meanse);
		burger.addEventListener('click', meanhi);
		meanx(smbo, '45deg');
		meanx(smbth, '-45deg');
		smbt.style.display = 'block'
	};
let nav = document.querySelector(`nav`);
burger.addEventListener('click', meanhi);
function meanx(smb, deg){
	if(!smb.style.transform){
		smb.style.transform = `rotate(${deg})`
		smb.style.position = `absolute`
		burger.style.top = `15px`
	}else{
		smb.style.transform = ``
		smb.style.position = `static`
		burger.style.top = `3px`
	}
};
