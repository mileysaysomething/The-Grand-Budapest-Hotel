$(window).scroll(function(){

    var scroll = $(this).scrollTop();

    //Mid layer
    //When scroll the Banner Title moves with 0.5 speed, based on distance scrolled.
    $('.banner-title')
    .css({'transform':'translate(0px,' + scroll / 2 + '%)'
    });

    //Front layer
    $('.banner-cast')
    .css({'transform':'translate(0px, -' + scroll / 5 + '%)'
    });
});