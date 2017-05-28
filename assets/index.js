
window.onload = function() {




window.onscroll= function() {
	const userTopScroll = document.body.scrollTop;
	const elementoAFixar = document.getElementById('menu-sections-wrapper');
console.log(elementoAFixar.offsetTop);
	if (userTopScroll > elementoAFixar.offsetTop) {
		elementoAFixar.classList.add('fixado');
	}
	else {
		elementoAFixar.classList.remove('fixado');
	}


}



}
