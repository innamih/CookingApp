$(function () {

    $('.slider-cook-items').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '#cook-slider-prev',
        nextArrow: '#cook-slider-next'
    });
      
    $('.slider-cook-kids').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        //adaptiveHeight: true,
        arrows: true,
        prevArrow: '#cook-slider-small-prev',
        nextArrow: '#cook-slider-small-next'
    });

    
})