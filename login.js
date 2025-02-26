document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      errorMessage.textContent = "Username dan password harus diisi!";
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = "dashboard.html"; // jika sukses, akan dialihkan ke sini. note : html belum ada
      } else {
        errorMessage.textContent =
          result.error || "Username atau password salah!";
      }
    } catch (error) {
      console.error("Error saat login:", error);
      errorMessage.textContent = "Terjadi kesalahan. Silakan coba lagi.";
    }
  });
});
