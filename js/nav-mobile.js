$(document).ready(function () {

    $('.menu-toggle').on('click', function () {

        display = $('.mobile-menu').css("display");

        $('.mobile-menu').find('a').on('click', function(){
            $('.mobile-menu').css('display', 'none');
        })

        if (display === 'none') {

            $('.mobile-menu').css("display", "block");
            $('.mobile-menu').css("top", "61px");
            $('.mobile-menu').css("z-index", "100");
            $('.mobile-controls').css('background-color', 'rgba(211,211,211,0.7)');
            $('.mobile-controls').css('height', '60px');
            $('.mobile-controls').css('position', 'fixed');
            $('.mobile-controls').css('top', '1px');
            $('.mobile-controls').css('width', '100%');
            $('.mobile-controls').css("z-index", "100");
            $('#about').css("margin-top", "10px");
            $('.menu-toggle').css('position', 'fixed');
            $('.menu-toggle').css('left', '42%');

        } else {

            $('.current-menu').removeClass('current-menu');
            $('.top-menu').css("left", "0");
            $('.back-button').css("display", "none");
        }
    });
});
 