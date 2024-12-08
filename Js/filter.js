document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.rating-button, .category-button');
    const shopItems = document.querySelectorAll('.shop-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.textContent.trim(); // 獲取按鈕的文字內容
            filterShops(filterValue);
        });
    });

    function filterShops(filterValue) {
        shopItems.forEach(item => {
            const categories = item.querySelectorAll('.category-btn');
            const rating = item.querySelector('.rating span').textContent.trim();

            // 檢查是否符合篩選條件
            const matchesCategory = Array.from(categories).some(category => category.textContent.includes(filterValue));
            const matchesRating = rating.includes(filterValue);

            if (matchesCategory || matchesRating) {
                item.style.display = ''; // 顯示符合條件的項目
            } else {
                item.style.display = 'none'; // 隱藏不符合條件的項目
            }
        });
    }
});