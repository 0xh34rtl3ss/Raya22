function selectText(containerid) {
    window.getSelection().selectAllChildren(document.getElementById(containerid));
}
$(document).ready(function () {
    rotate = 0;
    executed = false;
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.bg').css({
        'width': windowWidth,
        'height': windowHeight
    });
    $('.wrap').css({
        'width': windowWidth,
        'height': windowHeight
    });
    $('.wrap-outer').css({
        'width': windowWidth,
        'height': windowHeight
    });

    function getDocHeight() {
        var D = document;
        return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
    }
    if ($(".color-palette").length) {
        scrollAmount = $(".color-palette").outerHeight();
        setTimeout(function () {
            $("html, body").animate({
                scrollTop: (scrollAmount)
            }, 500);
        }, 500);
    }
    $(window).scroll(function () {
        var qW = $(window).height() / 4;
        var dH = getDocHeight();
        var hT = $('.main').offset().top,
            hH = $('.main').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        $(".bgnew").css("opacity", 1 - wS / qW);
        if (wS + wH > dH - wH + 600) {
            var amount = 1 - (((dH - wH) - wS) / qW);
            $(".bgnew").css("opacity", 0 + amount);
        }
        if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
            $('.toggle-box-right').hide(500);
            if ($(window).width() > 820) {
                $('.mobile-box').hide(500);
            }
        } else {
            $('.toggle-box-right').show(500);
            $('.mobile-box').show(500);
            return;
        }
    });
    if ($(window).width() < 1000) {
        if (rotate == 0) {
            MyToggleFunction();
        }
    }
    $(window).on('resize', function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $('.bg').css({
            'width': windowWidth,
            'height': windowHeight
        });
        $('.wrap').css({
            'width': windowWidth,
            'height': windowHeight
        });
        $('.wrap-outer').css({
            'width': windowWidth,
            'height': windowHeight
        });
        if ($(window).width() < 1000) {
            if (rotate == 0 && executed == false) {
                executed = true;
                MyToggleFunction();
            }
        }
    });

    function MyToggleFunction() {
        if ($('.color-input-right').is(':animated')) return;
        $('.color-input-right').toggle('slow', 'swing', function () {
            if ($('.color-input-right').is(":visible")) {
                if (rotate == 45) {
                    rotate = 0;
                    $('.close-box i').css({
                        'transform': 'rotate(' + rotate + 'deg)'
                    });
                }
            } else {
                if (rotate == 0) {
                    rotate = 45;
                    $('.close-box i').css({
                        'transform': 'rotate(' + rotate + 'deg)'
                    });
                }
            }
        });
    }
    $('.close-box').on('click', function () {
        MyToggleFunction();
    });
    $('.close').on('click', function () {
        $('.msg-box').css({
            'display': 'none'
        });
    });
   
    $('.mobile-button').on('click', function () {
        if ($('.mobile-menu').is(':animated')) return;
        if ($('.toggle-box-right').is(':animated')) return;
        var menuHeight = $('.mobile-menu').height() - 50;
        if ($(window).height() > 600) {
            if ($('.mobile-menu').is(":visible")) {
                $(".toggle-box-right").css({
                    'top': '100px'
                });
            } else {
                $(".toggle-box-right").css({
                    'top': 'calc(100px + ' + menuHeight + 'px)'
                });
            }
        }
        $(".mobile-menu").toggle('slow', 'swing', function () {});
    });
    $('.color-box').click(function () {
        $(this).find('.name').select();
    });

 
    $('.fade').css({
        'opacity': '1'
    });
});