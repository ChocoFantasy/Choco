import { IoUmbrellaSharp } from "react-icons/io5";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/* 一列兩欄 */}
        <div className="row">
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card"></div>
            {/* 標題 */}
            <div className="card-title">台北市</div>
            {/* 內容 */}
            <div className="card-body">
              {/* 一列三欄 */}
              <div className="row2">
                {/* 第一欄 */}
                <div className="co12">
                  <p>2日</p>
                  <p>
                    上午06:00<br />
                    ~<br />
                    下午06:00
                  </p>
                  <p>
                    <img src="./weatherIcon/晴時多雲.svg" alt="" />
                  </p>

                  <p>晴時多雲</p>
                  <p><IoUmbrellaSharp />10%</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col">第二欄</div>
        </div>
      </div>
    </>
  );
}

export default App;
