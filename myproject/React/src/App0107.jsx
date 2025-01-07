// import {useForm}  from "react";
// function App() {
//   const {
//     register, // 是一種狀態 state，可以綁定 N 個表單欄位
//     handleSubmit, // 是一種方法
//     formState:{errors, //捕捉驗證規則
//   } //= useForm();

//   // 建立一個自訂義的方法，被表單觸發時，將 register 資料進來
//   //const onSubmit = (data) => {
//     // 取得表單被綁定的全部欄位資料，以物件型態顯示
//     //console.log(data);
//     // 取得表單指定的欄位資料 => data.欄位名稱
//     //console.log(data.userName);
//   };

//   return (
//     <>

//       <h1>HookForm</h1>
//       <hr />
//       <div>
//         <form action="" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label htmlFor="username">使用者名稱：</label>
//             <input
//               type="text"
//               id="username"
//               defaultValue="demo"
//               {...register("useName",{required:true})}
//               // 當驗證成立時的訊息(沒有填寫欄位資料時)
//               {errors.userName && <span style={{color:'red'}}>必須填寫使用者名稱</span>}
//             />
//           </div>
//           // 使用者密碼
//           <div>
//             <label htmlFor="userpw">使用者密碼：</label>
//             <input
//               type="password"
//               id="userpw"
//                defaultValue="1234"
//               // 使用展開語法...register('欄位名稱')帶出所有被綁定的欄位
//               // 欄位名稱可以自行定義
//               {...register('userpw')}
//             />
//           </div>

//            // 年齡
//            <div>
//            <label htmlFor="userAge">年齡：</label>
//            <input
//              type="text"
//              id="age"
//               defaultValue=""
//              // 使用正規表達式
//              // 使用展開語法...register('欄位名稱')帶出所有被綁定的欄位
//              // 欄位名稱可以自行定義
//              {...register('age',{pattern:/\d+/})} //加上只能接受數值資料的驗證
//            />
//            {errors.useAge && <span>只能輸入數字</span>}
//          </div>
//            {/* 送出紐 */}
//         <button type="submit">送出</button>
//         </form>

//       </div>
//     </>
//   );
// }

// export default App;
