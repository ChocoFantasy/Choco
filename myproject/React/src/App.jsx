import { useEffect, useForm, useState } from "react";
function App() {
  // unsplash
  const api = "https://api.unsplash.com/seatch/photos";
  const [accessKey] = "0p99NnZvv03vGtqrypmaM-LvsICLJSlhFN11Wl20y2M";
  const [filterString, setFilterString] = useState("cafe");
  // 建立列表用的陣列
  const [jsonData, setJsonData] = useState([]);

  // 建立非同步方法，取得遠端資料
  // 避免重新渲染，所有寫在useEffect中

  useEffect(() => {
    const getPhotos = async () => {
      console.log(`${api}?client_id=${accessKey}&query=${filterString}`);
      //發出請求給遠端api，傳回結果
      const result = await axios.get(
        `${api}?client_id=${accessKey}&query=${filterString}`
      );

      //全部資料
      console.log(result);
      //第一頁的10筆資料
      console.log(result.data.results);
      setJsonData(result.data.results);

      //  ((preData)=>{
      //     return [...preData,...result.data.results];
      //   });
      //   console.log(jsonData);
      // } catch (error){
      //   console.log(error);
    };
    getPhotos();
  }, []);

  // 建立顯示圖片元件
  const Card = ({ item }) => {
    return (
      <img
        src={Item.urls.regular}
        alt=""
        width="400"
        height="320"
        style={{ objectFit: "cover" }}
      />
    );
  };

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {jsonData.map((item) => {
          <div key={Item.id}>
            {/*     <img
              src={Item.urls.regular}
              alt=""
              width="400"
              height="320"
              style={{ objectFit: "cover" }}
            /> */}
            <Card item={item} />
          </div>;
        })}
      </div>
    </>
  );
}
export default App;
