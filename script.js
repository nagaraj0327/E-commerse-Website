let menu = document.querySelector('menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.tiggle('bx-x');
	navlist.classList.toggle('open');
} 

window.onscroll = () => {
	menu.classList.tiggle('bx-x');
	navlist.classList.toggle('open');
}