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