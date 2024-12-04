export default function App() {
  return (
    <div className="wrap">
      <Navbar />
      <hr />
      {/* 水平線下方放內容 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/news" element={<News/>}></Route>
      </Routes>
    </div>
  );
}
