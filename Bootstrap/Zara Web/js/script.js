$(function () {
    $(' .hover-img').hover(
        function () {
            //滑鼠移入時，更換圖片
            var hoverSrc = $(this).data('hover');
            $(this).attr('data-default', $(this).attr('src'));
            $(this).attr('src', hoverSrc);
        },
        function () {
            // 滑鼠移出時還原圖片
            var hoverSrc = $(this).data('data-default');
            $(this).attr('src', hoverSrc);
        }
    )
});

// jQuery UI tabs
$("#tabs").tabs();

