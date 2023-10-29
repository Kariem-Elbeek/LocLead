// variables
let navbarHeight = $('#navbar').height();
let homeHeight = $('#home').height();
let ueberUnsTop = $('#ueber-uns').offset().top;
let dienstleistungenTop = $('#dienstleistungen').offset().top;
let referenzenTop = $('#referenzen').offset().top;


// navbar

$(window).scroll(function(){
    let windowHeight = $(window).scrollTop();
    if (windowHeight > homeHeight - navbarHeight){
        $('#navbar').addClass('bg-light');
        $('#navbar').removeClass('bg-transparent');
    }
    else{
        $('#navbar').addClass('bg-transparent');
        $('#navbar').removeClass('bg-light'); 
    }
});


// section ueber-uns

$('#ueber-uns .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
$('#ueber-uns .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});

$(window).scroll(function () { 
    let windowHeight = $(window).scrollTop() + navbarHeight;
    let ueberUnsHeight = $('#ueber-uns').height();
    if (windowHeight > ueberUnsTop - (ueberUnsHeight * .5)) {
        $('#ueber-uns .content-left').css('transform', 'translateX(0%)');
        $('#ueber-uns .content-right').css('transform', 'translateX(0%)');
    }
});

// section dienstleistungen

$('#dienstleistungen .content .mycontainer').css({'display': 'none'});
$(window).scroll(function () { 
    let windowHeight = $(window).scrollTop() + navbarHeight;
    let dienstleistungenHeight = $('#dienstleistungen').height();
    if (windowHeight > dienstleistungenTop - (dienstleistungenHeight * .5)) {
        $('#dienstleistungen .content .mycontainer').slideDown(2000);
    }
    
});

// section referenzen

$('#referenzen .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
$('#referenzen .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});

$(window).scroll(function () { 
    let windowHeight = $(window).scrollTop() + navbarHeight;
    let referenzenHeight = $('#referenzen').height();
    if (windowHeight > referenzenTop - (referenzenHeight * .5)) {
        $('#referenzen .content-left').css('transform', 'translateX(0%)');
        $('#referenzen .content-right').css('transform', 'translateX(0%)');
    }
});











