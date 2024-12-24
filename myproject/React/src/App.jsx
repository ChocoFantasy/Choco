import {motion} from "motion/react"

function App() {
// 摺疊資料
const questions = [
  {
    id:1,
    questions:"題目1",
    answer:"答案1",
  },
  {
    id:2,
    questions:"題目2",
    answer:"答案2",
  },
  {
    id:3,
    questions:"題目3",
    answer:"答案3",
  },
] 

  return (
    <>
    <div className="wrapper style={}" style={{
      backgroundColor:"black",
      maxWidth:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      color:"#ccc",
    }}>
      {/* FAQ 區 */}
      <div className="faq" style={{
        backgroundColor:"gray",
        width:"80%",
        padding:"8px",
        borderRadius:"5px",
      }}>
        {/* 主標題 */}
        <h2 style={{
          textAlign:"center",
          marginBottom:"10px",
        }}> FAQ 列表</h2>
        {
          // 帶出陣列資料
          questions.map((q)=>{
            return(
              <div key={q.id} style={{marginBottom:"5px"}}>
                {/* QA按鈕 */}
                <button style={{
                  width:"100%",
                  textAlign:"left",
                  borderRadius:"2px",
                  border:"none",
                  outline:"none",
                  padding:"10px",
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  fontSize:"20px",
                }}
                onClick={()=>setActiveQuestionId(activeQuestionId === q.id?null:q.id)}
                >

                   {/* 帶出題目 */}
                   {q.question}

                   {/* icon 加減號 */}
                  {
                    activeQuestionId === q.id ? <FaMinusCircle /> : <FaPlusCircle />
                  }
                   <FaPlusCircle />
                   <FaMinusCircle />
                </button>
                {/* 摺疊紐動畫 motion => https://motion.dev/docs/react-quick-stark */}
                <AnimetePresence>
                  {
                    // 作用中的id跟被展開的id相同時
                    activeQuestionId === q.id && (
                      <motion.div
                      // 初始化
                      initial={{opacity:0,height:0}}
                      // 展開動畫
                      animate={{opacity:1,height:"auto"}}
                      // 外觀樣式
                      style={{marginTop:"5px",color:"white",fontSize:"18px"}}
                      // 摺疊動畫
                      exit={{opacity:0,height:0}}

                      >
                        {/* 答案 */}
                        {q.answer}
                      </motion.div>
                    )
                  }
                </AnimetePresence>
              </div>
            )
          })
        }
      </div>
    </div>
    <div>Accordion</div>
    </>
  );
}

export default App;
