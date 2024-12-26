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
    // jQuery UI tabs
    $("#tabs").tabs();

});

// 環繞功能，有需要改lightbox，option 修改功能選項，不需要寫在 $(function () 內
lightbox.option({
    'wrapAround': true
})

