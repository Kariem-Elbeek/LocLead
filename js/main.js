// variables
let navbarHeight = $('#navbar').height();
let homeHeight = $('#home').height();
let windowWidth = $(window).width();
let windowHeight = $(window).height();
let ueberUnsTop = $('#ueber-uns').offset().top;
let ueberUnsHeight = $('#ueber-uns').height();
let dienstTop = $('#dienstleistungen').offset().top;
let dienstHeadingHeight = $('#dienstleistungen .section-heading').height();
let referenzenTop = $('#referenzen').offset().top;
let refnzHeadingHeight = $('#referenzen .section-heading').height();

// pre-animation
$('#ueber-uns .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
$('#ueber-uns .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
$('#dienstleistungen .content .content-part').css({'display': 'none'});
$('#referenzen .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
$('#referenzen .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});

// window scroll behaviour

$(window).scroll(function(){
    let windowTop = $(window).scrollTop();
    let windowBottom = windowTop + windowHeight;
    navbarShow();
    if (windowWidth >= 768){
        if (windowTop > ueberUnsTop - (ueberUnsHeight * .7)){
            ueberUnsShowBig();
        }
        if (windowBottom > dienstTop + (dienstHeadingHeight * 1.5)){
            dienstShowBig();
        }
        if (windowBottom > referenzenTop + (refnzHeadingHeight * 1.5)){
            refnzShowBig();
        }
    }
    else{
        if (windowTop > ueberUnsTop - (ueberUnsHeight * .7)){
            ueberUnsShowSmall();
        }
        if (windowBottom > dienstTop + (dienstHeadingHeight * 1.5)){
            dienstShowSmall();
        }
        if (windowBottom > referenzenTop + (refnzHeadingHeight * 1.5)){
            refnzShowSmall();
        }
    }
});


// navbar

function navbarShow (){
    let windowHeight = $(window).scrollTop();
    if (windowHeight > homeHeight - navbarHeight){
        $('#navbar').addClass('bg-light');
        $('#navbar').removeClass('bg-transparent');
    }
    else{
        $('#navbar').addClass('bg-transparent');
        $('#navbar').removeClass('bg-light'); 
    }
}

$('.nav-link').click(function () { 
    let navId = $(this).attr('nav-id');
    let goTop = $(navId).offset().top;
    window.scrollTo(0, goTop - navbarHeight);
});


// section ueber-uns

function ueberUnsShowBig () {
    $('#ueber-uns .content-left').css('transform', 'translateX(0%)');
    $('#ueber-uns .content-right').css('transform', 'translateX(0%)');
}
function ueberUnsShowSmall () {
    $('#ueber-uns .content-left').css('transform', 'translateX(0%)');
    $('#ueber-uns .content-right').css('transform', 'translateX(0%)');
}


// section dienstleistungen

function dienstShowBig () 
{
    console.log("big width = " + windowWidth);
    $('#dienstleistungen .content .content-part').slideDown(2000);
    $('#dienstleistungen .section-heading h2').addClass('bg-danger');
}

function dienstShowSmall (){
    console.log("small width = " + windowWidth);
    $('#dienstleistungen .section-heading h2').addClass('bg-danger');
    $('#dienstleistungen .content .content-part').each(function(index) 
    {
        var element = $(this);
        setTimeout(function() 
            {
                element.slideDown(1000);
            }, index * 1000
        ); // Delay each animation based on the index
    });    
}

    // if (windowWidth >= 768 && windowBottom > dienstTop + (dienstHeadingHeight * 1.5)) {
    //     $('#dienstleistungen .content .content-part').slideDown(2000);
    // }
    // else if (windowWidth < 768 && windowBottom > dienstTop + dienstHeadingHeight) {
    //     $('#dienstleistungen .content .content-part').each(function(index) {
    //         var element = $(this);
    //         setTimeout(function() {
    //             element.slideDown(1000);
    //         }, index * 1000); // Delay each animation based on the index
    //     });
    // }


// section referenzen

function refnzShowBig () {
    $('#referenzen .content-left').css('transform', 'translateX(0%)');
    $('#referenzen .content-right').css('transform', 'translateX(0%)');    
}
        
function refnzShowSmall () {
    $('#referenzen .content-part').each(function(index) {
        let element = $(this);
        setTimeout(function() {
        element.css('transform', 'translateX(0%)');
        }, index * 1000); // Delay each animation based on the index
    });
}

