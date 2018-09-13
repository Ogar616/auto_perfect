$(document).ready(function () {

    // Variable declaration...
    var left, width, newLeft;

    // Add the "top-menu" class to the top level ul...
    $('.mobile-menu').children('ul').addClass('top-menu');

    // Add buttons to items that have submenus...
    $('.has_child_menu').append('<button class="arrow"><i class="fa fa-chevron-right"></i></button>');

    // Mobile menu toggle functionality
    $('.menu-toggle').on('click', function () {

        // Detect whether the mobile menu is being displayed...
        display = $('.mobile-menu').css("display");

        if (display === 'none') {

            $('.mobile-menu').css("display", "block");
            $('.mobile-menu').css("top", "60px");
            $('.mobile-menu').css("z-index", "100");
            $('.mobile-controls').css('background-color', 'rgba(211,211,211,0.7)');
            $('.mobile-controls').css('height', '60px');
            $('.mobile-controls').css('position', 'fixed');
            $('.mobile-controls').css('top', '1px');
            $('.mobile-controls').css('width', '100%');
            $('.mobile-controls').css("z-index", "100");
            $('.menu-toggle').css('position', 'fixed');
            $('.menu-toggle').css('left', '42%');

        } else {

            $('.mobile-controls').css('background-color', '');
            $('.mobile-menu').css("display", "none");

            // and reset the mobile menu...
            $('.current-menu').removeClass('current-menu');
            $('.top-menu').css("left", "0");
            $('.back-button').css("display", "none");
        }
    });

    // Functionality to reveal the submenus...
    $('.arrow').on('click', function () {

        // The .current-menu will no longer be current, so remove that class...
        $('.current-menu').removeClass('current-menu');

        // Turn on the display property of the child menu
        $(this).siblings('ul').css("display", "block").addClass('current-menu');

        left = parseFloat($('.top-menu').css("left"));
        width = Math.round($('.mobile').width());
        newLeft = left - width;

        // Slide the new menu leftwards (into the .mobile viewport)...
        $('.top-menu').css("left", newLeft);

        // Also display the "back button" (if it is hidden)...
        if ($('.back-button').css("display") === "none") {
            $('.back-button').css("display", "flex");
        }

    });

    // Functionality to return to parent menus...
    $('.back-button').on('click', function () {

        // Hide the back button (if the current menu is the top menu)...
        if ($('.current-menu').parent().parent().hasClass('top-menu')) {
            $('.back-button').css("display", "none");
        }

        left = parseFloat($('.top-menu').css("left"));
        width = Math.round($('.mobile').width());
        newLeft = left + width;

        // Slide the new menu leftwards (into the .mobile viewport)...
        $('.top-menu').css("left", newLeft);

        // Allow 0.25 seconds for the css transition to finish...
        window.setTimeout(function () {

            // Hide the out-going .current-menu...
            $('.current-menu').css("display", "none");

            // Add the .current-menu to the new current menu...
            $('.current-menu').parent().parent().addClass('current-menu');

            // Remove the .current-menu class from the out-going submenu...
            $('.current-menu .current-menu').removeClass('current-menu');

        }, 250);

    });

});