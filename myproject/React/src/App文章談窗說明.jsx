import $ from "jquery";
import { useEffect } from "react";

function App() {
  //寫法2:建議的寫法
  useEffect(() => {
    // 移入 => mouseover()
    // 移出 => mouseout()
    // 移動 => mousemove()
    // X、Y 座標 => pageX、pageY
    // 取得 HTML 內容 => html()
    // 淡入 => fadeIn()
    // 淡出 => fadeOut()
    // 速度 => 毫秒() => (slow,normal,fast)
    // jQuery
    $("a:has(.ttpShow)").on('mouseover',function (e) {
            $("body").append('<div id="ttpPanel"' + $(this).children(".ttpShow").html() + "</div>");
            $("#ttpPanel").css({
                top: e.pageY + 10 + "px",
                left: e.pageX + 10 + "px",
              }).fadeIn("fast");
          }).on('mouseout',function (e) {
            $("#ttpPanel").remove();
          }).on('mousemove',function (e) {
             $("#ttpPanel").css({
                top: (e.pageY + 10) + "px",
                left: (e.pageX + 10) + "px",
              });
          });
      }, []);




  //   過時寫法
  //   $("a:has(.ttpShow)").mouseover(function (e) {
  //       $("body").append(
  //         '<div id="ttpPanel">' + $(this).children(".ttpShow").html() + "</div>"
  //       );
  //       $("#ttpPanel").css({
  //           top: e.pageY + 10 + "px",
  //           left: e.pageX + 10 + "px",
  //         }).fadeIn("fast");
  //     })
  //     .mouseout(function (e) {
  //       $("#ttpPanel").remove();
  //     })
  //     .mousemove(function (e) {
  //        $("#ttpPanel").css({
  //           top: (e.pageY + 10) + "px",
  //           left: (e.pageX + 10) + "px",
  //         });
  //     });
  // }, []);

  return (
    <>
      <h2>ToolTip 顯示說明</h2>
      <p>
        Lorem ipsum dolor sit,
        <a href="#">
          consectetur
          <span  className="ttpShow">
            consectetur內容說明：
          </span>
        </a>
        amet consectetur adipisicing elit. Dolorum recusandae porro, est ab, a
        reiciendis iusto aliquam molestiae molestias aperiam laboriosam
        necessitatibus
        <a href="#">
          atque
          <span  className="ttpShow">
            <img src="../images/flowershop/pt_news1.jpg" alt="花店最新消息" style={{
              width:'100px'
            }} />
          </span>
        </a>
        at maxime nam, dicta cum officia et!
      </p>
    </>
  );
}

export default App;
