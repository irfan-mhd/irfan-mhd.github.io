$('.toggle-bt').click(function(){
    $('.toggle-bt').toggleClass('clicked')
    $('nav ul').toggleClass('clicked')
    
})
$(window).on('scroll',function(){
    if($(window).scrolltop() > 50){
        $('header').css('background-color','yellow')
    }else{
        $('header').css('background-color','none');
    }
});