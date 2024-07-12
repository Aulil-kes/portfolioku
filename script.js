document.addEventListener("DOMContentLoaded", function () {
  const modalsDialog = document.querySelectorAll("#modal-dialog");
  const modalsBtn = document.querySelectorAll("#modal-button");
  const closeModal = document.querySelectorAll("#modal-close");
  const navbarMain = document.getElementById("navbar-main");
  const navbarBtn = document.getElementById("navbar-button");
  const toggleTheme = document.getElementById("dn-toggle-bs");

  toggleTheme.addEventListener("change", function (event) {
    if (event.target.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  });
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    toggleTheme.checked = true;
  }

  navbarBtn.onclick = function () {
    navbarMain.classList.toggle("hidden");
  };

  modalsBtn.forEach((btn, idx) => {
    btn.addEventListener("click", function () {
      const modal = modalsDialog[idx];
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  closeModal.forEach((btn) => {
    btn.addEventListener("click", function () {
      modalsDialog.forEach((modal) => {
        modal.style.display = "none";
      });
    });
  });
});
