//---漢堡按鈕---
$(document).ready(
    function () {
        $('.hamburger').click(function () {
            $(this).toggleClass('is-active');
            $('.navigation').toggleClass('show');
        });

        // 指定 menu 滾動效果
        $('.menu a').click(function () {
            // 取得屬性值 也就是href 裡面內容#video
            let btn = $(this).attr('href');
            // 取得相對座標位置 (top,left)
            let pos = $(btn).offset();

            // 捲動至相對座標位置 
            $('html,body').animate({ scrollTop: pos.top }, 1000);
        });

        //置頂按鈕，捲動至 0 座標位置

        $('#gotop').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 1000);
        });

        //置頂按鈕
        // 1. 偵測視窗卷軸有被捲動 -> 做下一步
        // 2. 
        $(window).scroll(function () {
            if($(this).scrollTop > 200){
                $('#gotop').stop().fadeIn();
            }else {
                $('#gotop').stop().fadeOut();
            }
        });

    });