import { useEffect, useRef } from "react";

function App() {

  //const [value,setValue] =useState('');
  
  // 建立一個 useRef 的變數
  const inputRef =useRef(null);

  console.log('App render...');

  const submitHandler = () => {
    // console.log(value);
    // 查看值
    console.log(inputRef.current.value);
    // 查看類型
    console.log(inputRef.current.type);
    // 更改類行為 password
    inputRef.current.type="password";
    // 查看類型
    console.log(inputRef.current.type);
  }

  return (
    <>

     {/* <input type="text" onChange={(e)=> setValue(e.target.value)} /> */}
     <input type="text" ref={inputRef} />
     <button onClick={submitHandler}>送出</button>
    </>
  );
}

export default App;
