// Definindo as imagens e legendas para o slideshow
let fotos = ["page.png", "banner.jpg", "banner2.jpg"];
let legenda = ["Nike Metcon 8", "JUST DO IT", "Nike Baseball Mercurial"];

// Função para trocar a imagem e a legenda
function TrocarFoto(fotoIndex) {
    // Atualiza a imagem no carrossel
    document.querySelector(".banner").src = "img/" + fotos[fotoIndex];
    // Atualiza a legenda do carrossel
    document.querySelector(".legenda").innerText = legenda[fotoIndex];
}

// Variável para controlar a foto atual
let fotoAtual = 0;

// Chama a função para trocar a foto assim que a página carrega
TrocarFoto(fotoAtual);

// Intervalo para a troca automática de fotos
let timer = setInterval(function () {
    fotoAtual++; // Avança para a próxima foto
    if (fotoAtual >= fotos.length) {
        fotoAtual = 0; // Se chegou ao final do array, volta para a primeira foto
    }
    // Troca a foto e a legenda
    TrocarFoto(fotoAtual);
}, 4000); // 4000ms = 4 segundos

// Função para parar a troca automática de fotos
function Parar() {
    clearInterval(timer); // Limpa o intervalo e para a troca automática
}
