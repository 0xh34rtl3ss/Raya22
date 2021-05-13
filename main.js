function selectText(containerid) {
    window.getSelection().selectAllChildren(document.getElementById(containerid));
}

function copy(){
    var input= document.getElementById('text');
    input.select();
    document.execCommand("copy");
    alert("text copied")
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

    console.log("wrap% "+windowHeight+" pts")
    var outers = $('.outer').css("height");
    var outer =  ((windowHeight - 57.75) /2 ) -131.25  ;
    console.log("height "+outers)
    console.log(outer)


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