$(function() {
    $('.menu__btn').on('click', function(){
        $('.menu__bottom-list').toggleClass('menu__bottom-list--active');
    });
    $('.production__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
});