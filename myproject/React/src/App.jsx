import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    // 驗證是否連上unsplash api
    // https://api.unsplash.com/search/photos/?client_id=自己的accessKey
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

    const api = 'https://api.unsplash.com/search/photos';
    const accessKey = '換上自己的accesskey';
    const [filterString, setFilterString] = useState('coffee');
    // 建立列表用的陣列
    const [jsonData, setJsonData] = useState([]);

    // 建立非同步方法，取得遠端資料
    // 避免重新渲染，所有寫在useEffect中
    useEffect(() => {
        const getPhotos = async () => {
            console.log(`${api}?client_id=${accessKey}&query=${filterString}`);
            // 發出請求給遠端api，傳回結果
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            // 全部資料
            // console.log(result);
            // 顯示10筆記錄
            console.log(result.data.results);
            // 更新陣列列表資料
            setJsonData(result.data.results);
        }
        getPhotos();
    }, []);

    // 建立顯示圖片元件
    const ShowPhoto = () => {
        return (
            jsonData.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />                        
                    </div>
                )
            })
        )
    }

    // 渲染時使用JSX語法，若要使用JS語法，前後加{}
    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <SearchBox  onSearchHandler={onSearchHandler} filterString={filterString}/>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                <ShowPhoto />
                </div>
            </div>
        </>
    )
}