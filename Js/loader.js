window.onload = function() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');

    // 等待動畫結束後顯示內容
    setTimeout(() => {
        loader.style.display = 'none'; 
        // content.style.display = 'block'; 
        body.style.overflow='hidden';
    }, 2000); 
};