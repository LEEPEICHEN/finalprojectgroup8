function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.toggle("show"); // 切換顯示或隱藏
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




    document.addEventListener("DOMContentLoaded", () => {
        const authContainer = document.getElementById("auth-container");
      
        // 檢查 localStorage 是否有會員資料
        const user = JSON.parse(localStorage.getItem("user"));
      
        if (user) {
          renderUserInfo(user);
        } else {
          renderRegistrationForm();
        }
      
        // 渲染會員資訊
        function renderUserInfo(user) {
          authContainer.innerHTML = `
            <h2>會員資訊</h2>
            <form id="user-info-form">
              <label for="name">姓名：</label>
              <input type="text" id="name" value="${user.name}" disabled>
      
              <label for="phone">電話：</label>
              <input type="tel" id="phone" value="${user.phone}" disabled>
      
              <label for="email">電子郵件：</label>
              <input type="email" id="email" value="${user.email}" disabled>
      
              <label for="address">地址：</label>
              <input type="text" id="address" value="${user.address}" disabled>
      
              <button type="button" id="edit-button">編輯</button>
              <button type="submit" id="save-button" style="display: none;">儲存</button>
              <button type="button" id="logout-button">登出</button>
            </form>
          `;
      
          const editButton = document.getElementById("edit-button");
          const saveButton = document.getElementById("save-button");
          const logoutButton = document.getElementById("logout-button");
          const inputs = document.querySelectorAll("#user-info-form input");
      
          // 編輯功能
          editButton.addEventListener("click", () => {
            inputs.forEach((input) => input.removeAttribute("disabled"));
            editButton.style.display = "none";
            saveButton.style.display = "block";
          });
      
          // 儲存功能
          document.getElementById("user-info-form").addEventListener("submit", (e) => {
            e.preventDefault();
      
            const updatedUser = {
              name: document.getElementById("name").value,
              phone: document.getElementById("phone").value,
              email: document.getElementById("email").value,
              address: document.getElementById("address").value,
            };
      
            localStorage.setItem("user", JSON.stringify(updatedUser));
            showAlert("會員資料已更新！");
          });
      
          // 登出功能
          logoutButton.addEventListener("click", () => {
            localStorage.removeItem("user");
            showAlert("已登出！");
            renderRegistrationForm();
          });
        }
      
        // 渲染註冊表單
        function renderRegistrationForm() {
          authContainer.innerHTML = `
            <h2>會員註冊/登入</h2>
            <form id="auth-form" class="auth-form">
              <label for="name">姓名：</label>
              <input type="text" id="name" placeholder="請輸入姓名" required>
      
              <label for="phone">電話：</label>
              <input type="tel" id="phone" placeholder="請輸入電話" required>
      
              <label for="email">電子郵件：</label>
              <input type="email" id="email" placeholder="請輸入電子郵件" required>
      
              <label for="address">地址：</label>
              <input type="text" id="address" placeholder="請輸入地址" required>
      
              <button type="submit">提交</button>
            </form>
          `;
      
          document.getElementById("auth-form").addEventListener("submit", (e) => {
            e.preventDefault();
      
            const user = {
              name: document.getElementById("name").value,
              phone: document.getElementById("phone").value,
              email: document.getElementById("email").value,
              address: document.getElementById("address").value,
            };
      
            localStorage.setItem("user", JSON.stringify(user));
            showAlert("註冊/登入成功！");
            renderUserInfo(user);  // 註冊成功後渲染會員資訊
          });
        }
      
        // 顯示自定義提示框
        function showAlert(message) {
          const alertBox = document.getElementById('custom-alert');
          const messageElement = document.getElementById('alert-message');
          messageElement.textContent = message;
          alertBox.style.display = 'flex';
      
          // 確保關閉按鈕有正確的事件綁定
          const closeButton = alertBox.querySelector('button');
          closeButton.addEventListener('click', closeAlert);
        }
      
        // 關閉自定義提示框
        function closeAlert() {
          const alertBox = document.getElementById('custom-alert');
          alertBox.style.display = 'none';
        }
      });
      
    
    
    
      