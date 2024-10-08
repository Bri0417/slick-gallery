// Banner
$(document).ready(function(){
    $('.banner-slider').slick({         
        arrows: true,   
        speed: 500,         
        fade: true,          
        cssEase: 'linear',
        autoplay: true, 
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        
    });
});

// gallery slider
$(document).ready(function() {
    function openPopup(images) {
        // Initialize Slick Slider
        $('#popup-slider .popupSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay: false,
            prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
            nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
            
        });

        // Populate the slider with images
        $('#popup-slider .popupSlider').slick('slickRemove', null, null, true);
        images.forEach(image => {
            $('#popup-slider .popupSlider').slick('slickAdd', `<div><img src="${image}" alt="Popup Image"></div>`);
        });

        // Show popup slider
        $('#popup-slider').show();
    }

    $('.gallery-item').on('click', function() {
        const images = $(this).data('images');
        openPopup(images);
    });

    $('.close').on('click', function() {
        $('#popup-slider').hide();
        $('#popup-slider .popupSlider').slick('unslick'); // Destroy Slick instance
    });
});

//     let currentSlider = null;

//     function openPopup(images) {
//         // Initialize Slick Slider
//         $('#popup-slider .popupSlider').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: true,
//             fade: true,
//             asNavFor: null,
//             autoplay: false,
//             prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
//             nextArrow: '<button type="button" class="slick-next">&#10095;</button>',

//         });

//         // Populate the slider with images
//         $('#popup-slider .popupSlider').slick('slickRemove', null, null, true); // Remove previous slides
//         images.forEach(image => {
//             $('#popup-slider .popupSlider').slick('slickAdd', `<div><img src="${image}" alt="Popup Image"></div>`);
//         });

//         // Show popup slider
//         $('#popup-slider').show();
//     }

//     $('.gallery-item').on('click', function() {
//         const images = $(this).data('images');
//         openPopup(images);
//     });

//     $('.close').on('click', function() {
//         $('#popup-slider').hide();
//         $('#popup-slider .popupSlider').slick('unslick'); // Destroy Slick instance
//     });


// });