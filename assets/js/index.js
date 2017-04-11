$(function() {
    /*移动设备菜单*/
    $('#navDrawer').click(function() {
        $('body').toggleClass('drawer-open');
    });
    /*视差效果初始化*/
    $('.parallax').parallax();
    /*tags标签添加波纹效果*/
    $('.tags a, .newer-posts, .older-posts').addClass('waves-effect waves-light');
    /*回到顶部*/
    $('#backTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });
    /*监听滚动条位置*/
    $(window).scroll(function(event) {
        var t = $(window).scrollTop();
        /*导航栏位置监听*/
        var nav = $('#headNav');
        if (t < 150) {
            nav.addClass('none-shadow');
        } else {
            nav.removeClass('none-shadow');
        }

        /*回到顶部按钮根据滚动条的位置的显示和隐藏*/
        var ts = $('.top-scroll');
        if (t < 500) {
            ts.fadeOut(300);
        } else {
            ts.fadeIn(300);
        }
    });
})