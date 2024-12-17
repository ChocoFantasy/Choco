import { useRef } from "react";

function App() {
  const greenRef = useRef(null);
  const yellowRef = useRef(null);

  const goGreen=()=>{
    window.scrollTo({
      top:greenRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  const goYellow=()=>{
    window.scrollTo({
      top:yellowRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <>
      {/*offseTop */}
      <div
        ref={yellowRef}
        style={{ height: "800px", backgroundColor: "yellow" }}
      >
        <button onClick={goGreen}>green</button>
      </div>

      <div
        ref={greenRef}
        style={{ height: "800px", backgroundColor: "green" }}
      >
        <button onClick={goYellow}>yellow</button>
      </div>
    </>
  );
}

export default App;
