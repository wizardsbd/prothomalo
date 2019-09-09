function scrollToElement(el, offset) {
    if (offset === undefined)
        offset = 0;
    var duration = 600;
    var element = $(el).offset();
    var pos = element.top + offset;
    $('html, body').animate({
        scrollTop: pos - 50
    }, duration);
}
(function($) {
    $('.side-nav__name').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('side-nav__name_open');
        var target = $(this).data('target');
        $('#' + target).slideToggle();
    });
    $('.wizards-close').on('click', function(event) {
        event.preventDefault();
        $(this).parent().parent().find('[class^="wizards_"]').hide();
    });
    var pageLink = window.location.pathname.split('/').pop(-1);
    if (pageLink.indexOf('m-') + 1) {
        pageLink = pageLink.substring(2);
    }
    $('.side-nav__row').each(function() {
        if ($(this).attr('href') === pageLink) {
            $(this).addClass('side-nav__row_active');
        }
    });
})(jQuery);