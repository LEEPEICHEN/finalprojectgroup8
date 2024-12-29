function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
}
    
    // 點擊其他地方時關閉下拉選單
    window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }
    
    let currentSlideIndex = 0; // 當前起始圖片的索引
    const visibleSlides = 3; // 同時顯示的圖片數量
    const productWidth = 280; // 單個商品寬度 (包含邊距)
    
    function moveSlide(direction, containerId) {
    const container = document.getElementById(containerId);
    const maxIndex = container.children.length - visibleSlides;
    
    // 更新索引
    if (direction === "left") {
        currentSlideIndex = Math.max(0, currentSlideIndex - 1);
    } else if (direction === "right") {
        currentSlideIndex = Math.min(maxIndex, currentSlideIndex + 1);
    }
    
    // 更新滑動位置
    const offset = -currentSlideIndex * productWidth;
    container.style.transform = `translateX(${offset}px)`;
    }

// 商品排序功能
function sortProducts() {
    const sortOption = document.getElementById('sortSelect').value;
    alert('目前選擇排序方式：' + sortOption);
    // 實際的排序邏輯可以根據數據結構實現
}

// 回到頂端按鈕顯示與功能
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 商品功能
function addToCart(productName) {
    alert(productName + ' 已加入購物車！');
}

function addToFavorites(productName) {
    alert(productName + ' 已加入收藏！');
}

// 商品排序功能
function sortProducts() {
    const sortOption = document.getElementById('sortSelect').value;
    const productList = document.querySelector('.product-list');
    const products = Array.from(productList.children);

    products.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.product-price').textContent.replace('NT$', '').trim());
        const priceB = parseInt(b.querySelector('.product-price').textContent.replace('NT$', '').trim());

        if (sortOption === 'priceAsc') {
            return priceA - priceB; // 價格低到高
        } else if (sortOption === 'priceDesc') {
            return priceB - priceA; // 價格高到低
        }
        return 0; // 預設排序
    });

    // 清空列表並重新排序
    productList.innerHTML = '';
    products.forEach(product => productList.appendChild(product));
}

// 點擊商品跳轉到對應的介紹頁
document.querySelector('.product-list').addEventListener('click', (event) => {
    const target = event.target.closest('.product-item');
    if (target) {
        const productId = target.getAttribute('data-id');
        // 跳轉到商品介紹頁，並攜帶商品 ID
        window.location.href = `product-detail.html?id=${productId}`;
    }
});


