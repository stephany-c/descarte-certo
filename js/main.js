// Carousel slick config
$(document).ready(function(){
    $('.fd-list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1034,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ],
    });

    // Check if user is logged
    const user = JSON.parse(localStorage.getItem('user'));

    // Menu user account visibility
    if (user) {
        $('#menu_account--button').hide();
        $('#menu_account--name').show();
        $('#menu_account--name p').html(user.name);
    } else {
        $('#menu_account--button').show();
        $('#menu_account--name').hide();
    }

    // Logout
    $('#menu_account--logout').click(() => {
        console.log('jkosjsjpk')
        localStorage.setItem('user', null);
        location.reload();
    });
});
