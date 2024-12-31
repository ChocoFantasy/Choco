import { createContext, useContext, useState } from "react";

function App() {
  // 建立共用環境區域
  const UserContext = createContext({}); 
  const [username, setUsername] = useState("");

  // 建立登入元件
  const LoginForm = () => {
    const { username, setUsername } = useContext(UserContext);
    return (
      <>
        <label htmlFor="username">使用者名稱</label>
        <input
          type="text"
          id="username"
          placeholder="請輸入使用名稱"
          value={username}
          onChange={(e) => setUsername(e.targrt.value)}
        />
        <button type="button">登入</button>
      </>
    );
  };
}

// 登入後的歡迎元件
const Greeting = () => {
  // 從共用區UserContext取得username
  const{username} = useContext(UserContext);


  return( <div>Hi,xxx</div>)
};

return (
  <>
    <h1>useContext</h1>
    <hr style={{ marginBottom: "50px" }} />
    <UserContext.Provider value={{ username, setUsername }}>
      <LoginForm />
    </UserContext.Provider>
  </>
);

export default App;
