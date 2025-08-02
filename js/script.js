$('.toggle-bt').click(function(){
    $('.toggle-bt').toggleClass('clicked')
    $('nav ul').toggleClass('clicked')
    
})

$(window).on('scroll',function(){

     var scrolled = $(window).scrollTop();
    if(scrolled > 50){
        $('header').css('background-color','white')
    }else{
        $('header').css('background-color','transparent');
    }
});