$(function () {
    $(window).resize(function () {
        var widthManHinh = $(this).width();
        if (widthManHinh <= 1023) {
            $('.navbar-ul .nav-item a p').removeClass('dropdown-toggle')
        } else {
            $('.navbar-ul .nav-item a p').addClass('dropdown-toggle')
        }
    })
})