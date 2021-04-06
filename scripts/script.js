
var deButton = document.querySelector(".ham");
var Menu = document.querySelector(".menu");

function ToonMenu(){
	
	Menu.classList.toggle("toonMenu");
}

deButton.addEventListener("click", ToonMenu);