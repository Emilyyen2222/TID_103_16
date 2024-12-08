// 定義切換選單顯示/隱藏的函數
function toggleMenu() {
    const menu = document.querySelector('.nav-menu'); // 選單元素
    const hamburger = document.getElementById('mobile-menu'); // 漢堡按鈕元素

    // 切換選單的顯示狀態
    menu.classList.toggle('active');

    // 切換漢堡按鈕的文字
    if (hamburger.textContent === "☰") {
        hamburger.textContent = "X"; // 變成 X
    } else {
        hamburger.textContent = "☰"; // 變回漢堡符號
    }
}

// 為漢堡按鈕綁定點擊事件
document.getElementById('mobile-menu').addEventListener('click', toggleMenu);
