// Carousel slick config
$(document).ready(function(){

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