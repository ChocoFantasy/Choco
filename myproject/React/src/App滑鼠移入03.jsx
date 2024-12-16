import $ from "jquery";
import { useEffect } from "react";

function App() {

  // 寫法1:過

  useEffect(()=>{
    $('.cssAnim1').on('mouseover',function(){
      $(this).addClass('imgScale');
    })
    $('.cssAnim1').on('mouseover',function(){
      $(this).removeClass('imgScale');
    })
  },[])

  return (
    <>
      <div>
        {/* <h2>jquery</h2>
        {/* React 中不需要寫 jquery 的前面，已經有代替了 $(funtion) */}
        {/* 記得家箭頭函式 */}
        {/*<button onClick={() => {
          console.log($('h2').text())
        }}>Click</button> */}

        <div>
          <a href="#" className="cssAnim1">
            <img src="./images/03.jpg" alt="" />
          </a>
        </div>

      </div>
    </>
  );
}

export default App;
