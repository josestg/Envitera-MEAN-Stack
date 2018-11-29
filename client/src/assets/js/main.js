$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items: 1,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $(window).scroll(function () {
        let pos = $(this).scrollTop();

        if (pos >= 30) {
            $('.navbar').addClass('bg-grad');
        } else {
            if ($(this).width() > 992)
                $('.navbar').removeClass('bg-grad');
        }
    })

    $(window).resize(function () {
        let w = $(this).width();
        if (w < 992) {
            $('.navbar').removeClass('fixed-top');
            $('.navbar').addClass('bg-grad');
        } else {
            $('.navbar').addClass('fixed-top')
            if ($(this).width() > 1024)
                $('.navbar').removeClass('bg-grad');
        }
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

});