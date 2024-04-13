$(document).ready(function(){
    $('.slider').slick({
        // Slick Carousel options/settings go here
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

var target = $(this.getAttribute('href'));
if (target.length) {
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
}

$("#contactarBtn").on('click', function(event) {
event.preventDefault();
var target = $("#contacto");
if (target.length) {
$('html, body').stop().animate({
    scrollTop: target.offset().top
}, 1000);
}
});
$("#contactarBtn").on('click', function() {
window.location.href = 'https://wa.me/3872201868';
});
// Desplazamiento suave al hacer clic en el enlace de 'Servicios'
$("#servicios-link").on('click', function(event) {
event.preventDefault();
var target = $("#servicios");
if (target.length) {
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
}
});
