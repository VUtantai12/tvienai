function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

/* ===== REGISTER ===== */
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("regUser").value.trim();
    const password = document.getElementById("regPass").value.trim();

    if (password.length < 6) {
      alert("Mật khẩu phải ít nhất 6 ký tự");
      return;
    }

    const users = getUsers();
    if (users.find(u => u.username === username)) {
      alert("Tài khoản đã tồn tại");
      return;
    }

    users.push({ username, password });
    saveUsers(users);

    alert("Đăng ký thành công");
    window.location.href = "login.html";
  });
}

/* ===== LOGIN ===== */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUser").value.trim();
    const password = document.getElementById("loginPass").value.trim();

    const users = getUsers();
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      alert("Sai tài khoản hoặc mật khẩu");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  });
}

/* ===== CHECK LOGIN ===== */
function checkLogin() {
  if (!localStorage.getItem("currentUser")) {
    window.location.href = "login.html";
  }
}

/* ===== LOGOUT ===== */
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}
