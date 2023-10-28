// variables
let navbarHeight = $('#navbar').height();
let homeHeight = $('#home').height();
let ueberUnsTop = $('#ueber-uns').offset().top;
let dienstleistungenTop = $('#dienstleistungen').offset().top;


// navbar

$(window).scroll(function(){
    let windowHeight = $(window).scrollTop();
    if (windowHeight > homeHeight){
        $('#navbar').addClass('bg-light');
        $('#navbar').removeClass('bg-transparent');
    }
    else{
        $('#navbar').addClass('bg-transparent');
        $('#navbar').removeClass('bg-light'); 
    }
});


// section ueber-uns

$('#ueber-uns .content-left').css('transform', 'translateX(-120%)');
$('#ueber-uns .content-right').css('transform', 'translateX(120%)');

$(window).scroll(function () { 
    let windowHeight = $(window).scrollTop() + navbarHeight;
    if (windowHeight > ueberUnsTop * .5) {
        $('#ueber-uns .content-left').css('transform', 'translateX(0%)');
        $('#ueber-uns .content-right').css('transform', 'translateX(0%)');
    }
});

// section ueber-uns

$('#dienstleistungen .content .mycontainer').css('display', 'none');
$(window).scroll(function () { 
    let windowHeight = $(window).scrollTop() + navbarHeight;
    if (windowHeight > dienstleistungenTop * .5) {
        $('#dienstleistungen .content .mycontainer').slideDown();
    }
});







