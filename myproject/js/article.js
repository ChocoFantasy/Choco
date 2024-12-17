document.addEventListener("DOMContentLoaded", function () {
    const postModal = document.getElementById("postModal");
    const openPostBtn = document.getElementById("openPostBtn");
    const closeModal = document.getElementById("closeModal");
    const cancelPost = document.getElementById("cancelPost");
    const submitPost = document.getElementById("submitPost");
  
    // 點擊外部圖片按鈕：開啟視窗
    openPostBtn.onclick = function () {
      postModal.style.display = "flex";
    };
  
    // 點擊關閉按鈕：關閉視窗
    closeModal.onclick = function () {
      postModal.style.display = "none";
    };
  
    // 點擊取消按鈕：確認取消並關閉視窗
    cancelPost.onclick = function () {
      if (confirm("確定要取消發文嗎？")) {
        postModal.style.display = "none";
      }
    };
  
    // 點擊送出按鈕：簡單模擬送出功能
    submitPost.onclick = function () {
      const board = document.getElementById("boardSelect").value;
      const title = document.getElementById("postTitle").value;
      const content = document.getElementById("postContent").value;
  
      if (!title || !content) {
        alert("標題和內容不能為空！");
        return;
      }
  
      alert(`發佈成功！\n分類：${board}\n標題：${title}\n內容：${content}`);
      postModal.style.display = "none";
    };
  });
  