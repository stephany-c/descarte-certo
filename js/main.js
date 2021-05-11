/* Main.js */

/* On click handlers */

// Often-discarted slide show
const onDiscartedChevronClick = (ev, direction) => {
    const totalElements = $('#my-slide-show').children().length;
    const totalInvisibles = 1;

    const currentInvisible = $('.often-discarted-list-item-invisible');
    const currentInvisibleId = parseInt(currentInvisible.attr('my-slide-id'), 10);

    const idSum = totalElements - totalInvisibles;

    const nextInvisibleId = 
        direction == 'left' ?
            (currentInvisibleId != totalElements ? (currentInvisibleId + idSum) : totalElements)
            : (currentInvisibleId != 1 ? (currentInvisibleId - idSum) : 1);
            
    currentInvisible.removeClass('often-discarted-list-item-invisible');
    
    $(`[my-slide-id=${nextInvisibleId}]`).addClass('often-discarted-list-item-invisible');
}

// On document ready
$(document).ready(() => {
    $('#often-discarted-area-button-left').click((ev) => onDiscartedChevronClick(ev, 'left'));
    
    $('#often-discarted-area-button-right').click((ev) => onDiscartedChevronClick(ev, 'right'));

    if (window.innerWidth > 1024) {
        console.log($('.often-discarted-list-item-invisible'));
        $('.often-discarted-list-item-invisible').removeClass('often-discarted-list-item-invisible');
    }
})