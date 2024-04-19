document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const targetSection = document.getElementById(btn.dataset.target);

    document.querySelectorAll(".tab-btn").forEach((tab) => tab.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".form-section").forEach((section) => (section.style.visibility = "hidden"));
    targetSection.style.visibility = "visible";
  });
});

document.querySelectorAll(".form-section")[0].style.visibility = "visible";
document.querySelector(".tab-btn")[0].classList.add("active");
