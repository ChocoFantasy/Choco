import { useState } from "react";

function App() {
  // 單一欄位處理的缺點，要逐一處理每個欄位寫入的程式碼，這樣一來顯得沒有管理效率
  // // 使用者名稱
  // const [username, setUsername] = useState('');
  // const handleChange=(e)=>{
  //   setUsername(e.target.value);
  // }

  // // 密碼
  // const [userpw, setUserpw] = useState('');
  // const handleChange2=(e)=>{
  //   setUsername(e.target.value);
  // }

  //同時處理不同欄位與資料
  const [formData,setFormData]=useState(
    {
      uid:'demo',
      upw:'',
      username:'text',
      userpw:"1234"
    });

  const handleChange =(e)=>{
    // // 值
    // console.log(e.target.value);
    // // 屬性
    // console.log(e.target.name);
    // // 資料型態
    // console.log(e.target.type);

    //寫入異動欄位的資料
    const value =e.target.value;
    const name =e.target.name;
    setFormData ({
      ...formData, //使用其餘運算子帶出所有資料
      [id]:value,  // 使用變數的方式帶入被異動欄位的屬性
    })
  }

  // 表單送出的函式

  const handleSubmit =(e) =>{
    // 取消HTML的預設行為
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" className="radio" name="result" />及格
            <input type="text" className="radio" name="result" />不及格
            </div>
          {/* 使用者名稱 */}
          <div>
            <label htmlFor="username">使用者名稱：</label>
            <input
              type="text"
              id="username"
              name="uid"
              value={formData.uid}
              onChange={handleChange}
            />
          </div>
          {/* 密碼 */}
          <div>
            <label htmlFor="userpw">密碼：</label>
            <input
              type="password"
              id="userpw"
              name="userpw"
              value={formData.userpw}
              onChange={handleChange}
            />
          </div>
          {/* 確認狀態 */}
          <div>
            <label htmlFor="isCheck">確認狀態</label>
            <input type="checkbox" id="isCheck"  name="isChk" />
          </div>
          <button type="submit">送出</button>


        </form>
      </div>
    </>
  );
}

export default App;
