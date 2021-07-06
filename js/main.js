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

    $('#customSwitch1').change(locationSwitchOnChange);
});

/* Determine switch on/off propperty */
const isSwitchChecked = (selector) => {
    const element = $(selector);
    if (!element) {
        return null;
    }

    return { isChecked: element.is(':checked'), element };
}

/* Execute map recentering on switch change */
const locationSwitchOnChange = async (ev) => {
    const { isChecked, element } = isSwitchChecked('#' + ev?.target?.id);

    const map = isMapValid();
    if (!map) {
        element.prop('checked', false);
        return;
    }

    const currentLocation = window.currentGeolocation;
    
    if (isChecked) {
        const user = JSON.parse(localStorage.getItem('user') ?? '');
        if (!isUserValid(user)) {
            element.prop('checked', false);
            return;
        }

        map.setCenter({ lat: user?.location?.latitude, lng: user?.location?.longitude });
        return;
    }

    map.setCenter(currentLocation);
};

/* Check if user is logged and have location information registered */
const isUserValid = (user) => {
    if (!user) {
        alert('Faça login para prosseguir');
        return false;
    }

    if (!user?.location?.latitude || !user?.location?.longitude) {
        alert('Usuário sem latitude/longitude cadastrados');
        return false;
    }

    return true;
}

/* Verify if location permissions have been conceed */
const isMapValid = () => {
    const map = window.map;
    if (!map.setCenter) {
        alert('Permissões de localização não concedidas');
        return false;
    }

    return map;
}
