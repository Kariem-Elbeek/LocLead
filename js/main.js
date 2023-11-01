// variables
let windowTop;
let windowBottom;
let navbarHeight = $('#navbar').height();
let homeHeight = $('#home').height();
let windowWidth = $(window).width();
let windowHeight = $(window).height();
let ueberUnsTop = $('#ueber-uns').offset().top;
let ueberHeadingHeight = $('#ueber-uns .section-heading').height();
let ueberUnsHeight = $('#ueber-uns').height();
let dienstTop = $('#dienstleistungen').offset().top;
let dienstHeadingHeight = $('#dienstleistungen .section-heading').height();
let referenzenTop = $('#referenzen').offset().top;
let refnzHeadingHeight = $('#referenzen .section-heading').height();
let ueberUnsContentTop = $('#ueber-uns .content').offset().top;
let dienstContentTop = $('#dienstleistungen .content').offset().top
let referenzenContentTop = $('#referenzen .content').offset().top

// table temp values
let currentWindowTop = $('.current-WindowTop');
let firstUeberTop = $('.first-ueberTop');
let actualUeberTop = $('.actual-ueberTop');
let firstDienstTop = $('.first-dienstTop');
let actualDienstTop = $('.actual-dienstTop');
let firstRefnzTop = $('.first-refnzTop');
let actualRefnzTop = $('.actual-refnzTop');
let firstWindowBottom = $('.first-windowBottom');
let actualWindowBottom = $('.actual-windowBottom');

let ueberUnsTopCurrent;
let ueberUnsHeightCurrent = $('#ueber-uns').height();
let dienstTopCurrent;
let dienstHeadingHeightCurrent = $('#dienstleistungen .section-heading').height();
let referenzenTopCurrent;


// pre-animation

if (windowWidth >= 768){
    // pre-animation
    $('#ueber-uns .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
    $('#ueber-uns .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
    $('#dienstleistungen .content .content-part').css({'display': 'none'});
    $('#referenzen .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
    $('#referenzen .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
}
else{
    $('.content-part').css({'display': 'none'});
}

// window scroll behaviour

$(window).scroll(function(){
    windowTop = $(window).scrollTop();
    windowBottom = windowTop + windowHeight;
    navbarShow();
// table temp

    ueberUnsTopCurrent = $('#ueber-uns').offset().top;
    dienstTopCurrent = $('#dienstleistungen').offset().top;
    referenzenTopCurrent = $('#referenzen').offset().top;

    currentWindowTop.html(windowTop.toFixed());
    firstUeberTop.html(ueberUnsTop.toFixed());
    actualUeberTop.html(ueberUnsTopCurrent.toFixed());
    firstDienstTop.html(dienstTop.toFixed());
    actualDienstTop.html(dienstTopCurrent.toFixed());
    firstRefnzTop.html(referenzenTop.toFixed());
    actualRefnzTop.html(referenzenTopCurrent.toFixed());
    firstWindowBottom.html(windowBottom.toFixed());
    actualWindowBottom.html();

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
        if (windowBottom > ueberUnsContentTop + ueberHeadingHeight){
            ueberUnsShowSmall();
        }
        if (windowBottom > dienstContentTop + dienstHeadingHeight){
            dienstShowSmall();
        }
        if (windowBottom > referenzenContentTop + refnzHeadingHeight){
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


// showSmall

function showEachSlideDown(element, i) 
    {
        setTimeout(function() 
            {
                element.slideDown(1000);
            }, i * 1300
        ); // Delay each animation based on the index
    }

// section ueber-uns

function ueberUnsShowBig () {
    $('#ueber-uns .content-left').css('transform', 'translateX(0%)');
    $('#ueber-uns .content-right').css('transform', 'translateX(0%)');
}
function ueberUnsShowSmall () {
    $('#ueber-uns .content .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });
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
    $('#dienstleistungen .content .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
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
    $('#referenzen .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });
}

