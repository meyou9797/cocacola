$(document).ready(function(){
    //메인슬라이더 슬릭
    $('.con03cnt').slick({
        slidesToShow:2,
        slidesToScroll:1,
        dots:false,
        prevArrow:'<div class="sliderPrevBtn">이전</div>',
        nextArrow:'<div class="sliderNextBtn">다음</div>',
    })
    
    //wow
    new WOW().init();
})