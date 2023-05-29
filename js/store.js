let fotos = ["page.png", "banner.jpg", "banner2.jpg"];
let legenda = ["Nike Metcon 8", "JUST DO IT",  "Nike Baseball Mercurial"];


function TrocarFoto(foto){
	document.querySelector(".banner").src = "img/" + fotos[foto];
	document.querySelector(".legenda").innerText = legenda[foto];
	
}

let fotoAtual = 0;
TrocarFoto(fotoAtual);


var timer = setInterval(function(){
	fotoAtual++;
	if(fotoAtual > 2){
		fotoAtual = 0;
	}
	
	TrocarFoto(fotoAtual);
} , 4000);

function Parar() {
	clearInterval(timer);
  }