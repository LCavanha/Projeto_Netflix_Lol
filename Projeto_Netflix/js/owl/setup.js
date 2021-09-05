$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }, /*de 0 a 700 px aparecerá apenas 1 imagem do carrosel na tela */
        700:{
            items:3
        }, /*de 700 a 1000 px aparecerão 3 imagens do carrosel na tela */
        1000:{
            items:5
        } /*acima de 1000 px aparecerão 5 imagens do carrosel na tela */
    }
})

function clicou(){
    alert("Criado por Leonardo Cavanha");
}