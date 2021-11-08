$(function () {
            //---------------auto click next
            // $(document).ready(function () {
            //     setInterval(function () {
            //         $('.carousel-control-next').click();
            //     }, 3000);
            // })
            //---------------slider-sale
            var ml = 0;
            var w = 234;
            $('.next').click(function () {
                ml -= w;
                if (ml > -(w * 8)) {
                    $('.slider-sale-sub').css('margin-left', ml)
                } else {
                    ml = w;
                }
            })
            $('.prev').click(function () {
                ml += w;
                if (ml < w) {
                    $('.slider-sale-sub').css('margin-left', ml)
                } else {
                    ml = 0;
                }
            })
            setInterval(function () {
                $('.next').click();
            }, 5000)
            // -----------------------------croll fixed bar
            if ($('.icon-contact, .icon-arrow-up').length > 0) {
                $(window).scroll(function () {
                    if (jQuery(window).scrollTop() > 80) {
                        jQuery('.icon-contact, .icon-arrow-up').addClass('is-show');
                    } else {
                        jQuery('.icon-contact , .icon-arrow-up').removeClass('is-show');
                    }
                });
            }             
        })
