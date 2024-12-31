import { useState,useMemo } from "react";

function App() {
  // 單價變數
  const [price, setPrice] = useState(100); // 預設值 100

  // 數量變數
  const [qty, setQty] = useState(1); // 預設值 1

  // 總價變數
  const tot = price * qty;

  // 商品紀錄
  const prodData = [
    {
      id: 1,
      title: "冰蜂蜜美式",
      price: 80,
      imgUrl:'./images2/01.jpg'
    },
    {
      id: 2,
      title: "經典美式",
      price: 120,
      imgUrl:'./images2/02.jpg'
    },
    {
      id: 3,
      title: "經典拿鐵",
      price: 160,
      imgUrl:'./images2/03.jpg'
    },
    {
      id: 4,
      title: "蜂蜜拿鐵",
      price: 170,
      imgUrl:'./images2/04.jpg'
    },
    {
      id: 5,
      title: "每日特調",
      price: 170,
       imgUrl:'./images2/05.jpg'
    },
  ];

  // 建立表格元件
  const ProdTable = (filterProds) => {
    return (
      <table
        style={{
          width: "500px",
        }}
      >
        <tbody>
          {prodData.map((prod) => {
            return (
              <tr key={prod.id} style={{ borderBottom: "1px dashed #333" }}>
                <td
                  style={{
                    borderBottom: "1px dashed #ccc",
                    padding: "5px",
                    width: "300px",
                  }}
                >
                  {prod.title}
                </td>
                <td style={{
                    marginBottom:'20px',
                  }}>
                  <img src={prod.imgUrl} alt="" style={{
                    width:'100px',
                    verticalAlign:'top',
                  }} />
                </td>
                <td
                  style={{
                    borderBottom: "1px dashed #ccc",
                    padding: "5px",
                    width: "200px",
                    textAlign: "right",
                  }}
                >
                  {prod.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  // 陣列變數，預設為原商品的陣列資料
  const [prods, setProds] = useState(prodData);

  // 排序變數，預設為遞增
  const [ascending, setAscending] = useState(true);
  // 搜尋變數
  const [search, setSearch] = useState("");

  // 建立排序與搜尋的函式
  const filterProds = useMemo(() => {
    return [...prods]
    .sort((a, b) => {
      return ascending ? a.price - b.price : b.price - a.price;
    })
    .filter((prods)=>{
      return prods.title.match(search);
    })
  }, [ascending, search]);

  return (
    <>
      <h1>UseMeMO 搜尋、排序</h1>
      <hr style={{ marginBottom: "20px" }} />
      <h2>金額計算：</h2>
      單價：
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      數量：
      <input
        type="number"
        value={qty}
        onChange={(e) => {
          if (e.target.value < 0) {
            alert("err");
            setQty(1);
          } else {
            setQty(e.target.value);
          }
        }}
      />{" "}
      <br />
      <div>總價：{tot}</div>
      <hr style={{ marginBottom: "50px" }} />
      <h2>排序開啟：</h2>
      <input type="checkbox" checked={ascending} onChange={(e) => setAscending(e.target.checked)} />
      <br />
      搜尋：
      <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
      {/* 呼叫表格元件 */}
      <table>
        {/* 帶出商品陣列資料 */}
        <ProdTable filterProds={filterProds} />
      </table>
    </>
  );
}

export default App;
