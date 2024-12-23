import { useState } from "react";
import img1 from "./images2/01.jpg";
import img2 from "./images2/02.jpg";
import img3 from "./images2/03.jpg";
import img4 from "./images2/04.jpg";
import "../assets/all.scss";

function App() {
  // 角色頁
  // 建立目前縮圖的變數
  const [currentImg, setCurrentImg] = useState(3);
  // 建立圖片陣列
  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div className="wrapper">
        <div
          style={{
            //display: "flex",
            width: "700px",
            //justifyContent: "space-around",
            margin: "50px auto",
            border: "1px solid red",
            textAlign: "center",
          }}
        >
          {/* 縮圖區 */}
          <div
            style={{
              display: "flex",
              //width:"700px",
              //flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            {/* <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> */}

            {/* 建立圖片陣列 */}
            {arrPhotos.map((photo, index) => {
              return (
                <img
                  key={index}
                  src={arrPhotos[index]}
                  alt="photos"
                  width={100}
                  height={80}
                  onClick={() => setCurrentImg(index)}
                  style={{
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                />
              );
            })}
          </div>
          {/* 大圖區 */}
          <div>
            <img
              src={arrPhotos[currentImg]}
              alt="photos"
              width={580}
              height={350}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
