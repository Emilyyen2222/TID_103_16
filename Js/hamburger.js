// hamburger.js
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active'); // 切換顯示狀態
}

// 在頁面加載時，檢查螢幕寬度
window.addEventListener('resize', function() {
    const menu = document.querySelector('.nav-menu');
    if (window.innerWidth >= 1024) {
        menu.classList.remove('active'); // 在大於 1024 像素時隱藏下拉選單
    }
});

// 添加事件監聽器到漢堡選單
document.getElementById('mobile-menu').addEventListener('click', toggleMenu);



/*
classList 是用來操作 HTML 元素上的 CSS 類名（class）的屬性。它提供了一些方法，讓你可以輕鬆地新增、移除、切換或檢查類名。
menu.classList.add('active')：新增 active 類名。
menu.classList.remove('active')：移除 active 類名。
menu.classList.toggle('active')：如果 active 存在就移除它，不存在就新增它。
*/

// 定義切換選單顯示/隱藏的函數
// function toggleMenu() {
    // const menu = document.querySelector('.nav-menu'); // 選單元素
    // const hamburger = document.getElementById('mobile-menu'); // 漢堡按鈕元素

    // 切換選單的顯示狀態
    // menu.classList.toggle('active');

    // 切換漢堡按鈕的文字
//     if (hamburger.textContent === "☰") {
//         hamburger.textContent = "X"; // 變成 X
//     } else {
//         hamburger.textContent = "☰"; // 變回漢堡符號
//     }
// }

// 為漢堡按鈕綁定點擊事件
// document.getElementById('mobile-menu').addEventListener('click', toggleMenu); 
