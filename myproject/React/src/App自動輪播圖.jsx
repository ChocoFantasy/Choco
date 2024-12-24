import { useEffect, useState } from "react";
import {} from "";
import "../assets/all.scss";

function App() {
  // 建立目前背景圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 建立輪播圖片的陣列物件
  const slides = [
    { url: "./images2/06.jpg",title:"photo-1" },
    { url: "./images2/07.jpg",title:"photo-2" },
    { url: "./images2/08.jpg",title:"photo-3" },
    { url: "./images2/09.jpg",title:"photo-4" },
  ];

  useEffect(() => {
    // 每 3 秒呼叫 nextSlide() 換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [currentImgIndex]);

  // 下一張
  const nextSlide = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)
      // 取得前一張的索引編號，檢查是否為最後一個編號
      // 是 => 回到第一張
      // 否 => 跳到下一張
    );
  };

  // 上一張
  const prevSlide = () => {
      setCurrentImgIndex(
        (prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1)
        // 取得前一張的索引編號，檢查是否為最後一個編號
        // 是 => 回到第一張
        // 否 => 跳到下一張
      );
    };

  // 建立控制左右icon
  const Arrow=({direction,onClick})=> 

    // 擺放icon的區域
    <div style={{
      position:"absolute",
      top:"50%",
      cursor:"pointer",
      color:"white",
      [direction]:"20px", //將 icon 拆開，
    }}>
      {
        direction === "left"? (
           <FaChevronCircleLeft size={50} onClick={onClick} />           
        ):(<FaChevronCircleRight size={50} onClick={onClick}/> )
      }
      
    </div>

  return (
    <>
      {/* 最外層 */}
      <div className="wrapper2">
        {/* 背景輪播區 */}
        <div
          style={{
            backgroundImage: `url(${slides[currentImgIndex].url})`,
            backgroundSize: "cover", //塞滿
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            margin: "auto",
          }}>
            <h2 style={{color:"red"}}>{slides[currentImgIndex].title}</h2>
            {/* 上一張 */}
            <Arrow direction="left" onClick={prevSlide}/>
            {/* 下一張 */}
            <Arrow direction="right" onClick={nextSlide}/>

          </div>
      </div>
    </>
  );
}

export default App;
