// navbar

$(window).scroll(function(){
    let windowHeight = $(window).scrollTop();
    let homeHeight = $('#home').height();
    if (windowHeight > homeHeight){
        $('#navbar').addClass('bg-light');
        $('#navbar').removeClass('bg-white');
        console.log('done')
    }
    else{
        $('#navbar').addClass('bg-transparent');
        $('#navbar').removeClass('bg-white'); 
    }
});

