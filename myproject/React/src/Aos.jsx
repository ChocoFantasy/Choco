import $ from "jquery";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  //寫法2:建議的寫法
  useEffect(()=>{
    AOS.init(); //初始化
  },[])
  return (
    <>
         {/* AOS 動畫套件 不知道意思請去找 */}
        <h1 data-aos="zoom-in">AOS-zoom-in</h1>
        <div className="box" data-aos="fade-up" data-aos-duration="1000">
          <p>data-aos="fade-up"</p>
          <p>data-aos-duration="1000"</p>
        </div>

    </>
  );
}

export default App;
