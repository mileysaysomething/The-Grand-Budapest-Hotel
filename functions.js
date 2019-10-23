


$(window).scroll(function () {

    var scroll = $(this).scrollTop();

    /* ------------------------------ Banner ---------------------------- */

    //Mid layer
    //When scroll the Banner Title moves with 0.5 speed, based on distance scrolled.
    $('.banner-title')
        .css({
            'transform': 'translate(0px,' + scroll / 2 + '%)'
        });

    //Front layer
    $('.banner-cast')
        .css({
            'transform': 'translate(0px, -' + scroll / 5 + '%)'
        });

    /* ------------------------------ Cast Grid ---------------------------- */

    // How far scrolled from the top > container from the top - one third of the screen
    if (scroll > $('.container').offset().top - ($(window).height()/1.3) ){

        $('.container div').each(function (i) {

            //Shows one by one
            setTimeout(function () {
                $('.container div').eq(i).addClass('isShowing'); // Add isShowing
            }, 150 * (i + 1));


        });
    }
});