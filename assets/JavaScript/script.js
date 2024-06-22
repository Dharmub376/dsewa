//navbar fade for small screen
$(window).scroll(function() {
    if (window.innerWidth < 750) {
        if ($(this).scrollTop() > 10) {
            $('.search-input-wrap').fadeOut();

        } else {
            $('.search-input-wrap').fadeIn();
        }
    } else return 0;
});


function myFunction() {
    if (window.innerWidth < 750) {


        // if(document.getElementById('menu-collapse-btn').click){
        //   document.getElementById('menu-collapse').style.display="block";
        // }
        // else{
        //   document.getElementById('menu-collapse').style.display="none";
        // }
        if (document.getElementById('menu-collapse').style.display === "none") {
            document.getElementById('menu-collapse').style.display = "block";
        } else {
            document.getElementById('menu-collapse').style.display = "none";
        }
    } else return 0;
}

$(document).ready(function() {
    $('.banner-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

//slick-corousel

$('.content-stage').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

// slick for thumbnail slider

$('.partner-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
});

//scroll to top icon

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.page-scroll-top').fadeIn();
    } else {
        $('.page-scroll-top').fadeOut();
    }
});
$('.page-scroll-top').click(function() {
    document.documentElement.scrollTop = 0;
});

//slick prev scripts