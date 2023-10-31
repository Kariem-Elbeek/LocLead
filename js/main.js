// variables
let navbarHeight = $('#navbar').height();
let homeHeight = $('#home').height();



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

$('.nav-link').click(function () { 
    let navId = $(this).attr('nav-id');
    let goTop = $(navId).offset().top;
    window.scrollTo(0, goTop - navbarHeight);
});


// section ueber-uns

$('#ueber-uns .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
$('#ueber-uns .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});

$(window).scroll(function () { 
    let windowTop = $(window).scrollTop();
    let ueberUnsTop = $('#ueber-uns').offset().top;
    let ueberUnsHeight = $('#ueber-uns').height();
    if (windowTop > ueberUnsTop - (ueberUnsHeight * .5)) {
        $('#ueber-uns .content-left').css('transform', 'translateX(0%)');
        $('#ueber-uns .content-right').css('transform', 'translateX(0%)');
    }
});

// section dienstleistungen

$('#dienstleistungen .content .content-part').css({'display': 'none'});
$(window).scroll(function () { 
    let windowTop = $(window).scrollTop();
    let windowBottom = windowTop + $(window).height();
    let dienstTop = $('#dienstleistungen').offset().top;
    let dienstHeadingHeight = $('#dienstleistungen .section-heading').height();
        if (windowBottom > dienstTop + (dienstHeadingHeight * 1.5)) {
        $('#dienstleistungen .content .content-part').slideDown(2000);
    }
    
});

// section referenzen

$('#referenzen .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
$('#referenzen .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});

$(window).scroll(function () { 
    let windowTop = $(window).scrollTop();
    let windowBottom = windowTop + $(window).height();
    let referenzenTop = $('#referenzen').offset().top;
    let refnzHeadingHeight = $('#referenzen .section-heading').height();
        if (windowBottom > referenzenTop + (refnzHeadingHeight * 1.5)) {
        $('#referenzen .content-left').css('transform', 'translateX(0%)');
        $('#referenzen .content-right').css('transform', 'translateX(0%)');
    }
});


