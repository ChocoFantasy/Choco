//---漢堡按鈕---
$(document).ready(
    function () {
        $('.hamburger').click(function () {
            $(this).toggleClass('is-active');
            $('.navigation').toggleClass('show');
            console.log('Hamburger button clicked!');
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

        // //置頂按鈕，捲動至 0 座標位置

        // $('#gotop').click(function () {
        //     $('html,body').animate({ scrollTop: 0 }, 1000);
        // });

        // //置頂按鈕
        // // 1. 偵測視窗卷軸有被捲動 -> 做下一步
        // // 2. 滾動超過 500 就顯示圖案，沒有則隱藏

        // $(window).scroll(function () {
        //     if ($(this).scrollTop() > 500) {
        //         $('#gotop').stop().fadeTo('',1);
        //     } else {
        //         $('#gotop').stop().fadeOut();
        //     }
        // });


        // 監聽按鈕點擊事件
        $('#gotop').on('click', function (event) {
            event.preventDefault(); // 防止連結默認行為（例如跳轉 # 頂部）
            $('html, body').animate({ scrollTop: 0 }, 1000); // 平滑滾動到頂部
        });

        // 滾動事件：控制按鈕顯示/隱藏
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 500) {
                $('#gotop').fadeIn(); // 顯示按鈕
            } else {
                $('#gotop').fadeOut(); // 隱藏按鈕
            }
        });

        $('a[href="#"]').on('click', function (event) {
            event.preventDefault(); // 阻止默認跳轉行為
        });



        // 移除行動裝置的背景影片
        if ($(window).width() <= 820) {
            $('#video-bg').remove();
        }
    });

// 通常啟用jq獨立套件(獨立放在外面)
$('.smoove').smoove({
    offset: 250,
});
