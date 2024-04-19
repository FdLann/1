const carouselInner = document.querySelector(".carousel-inner");
const profileBoxes = document.querySelectorAll(".profile-box");
let currentIndex = 0;

function showNextProfile() {
  profileBoxes[currentIndex].classList.remove("active"); // Hilangkan kelas active dari profil saat ini
  currentIndex = (currentIndex + 1) % profileBoxes.length; // Tentukan indeks profile box berikutnya
  profileBoxes[currentIndex].classList.add("active"); // Tambahkan kelas active ke profile box berikutnya
  const translateValue = -currentIndex * (100 / profileBoxes.length); // Hitung nilai pergeseran
  carouselInner.style.transform = `translateX(${translateValue}%)`; // Geser carousel inner sesuai dengan indeks
}

// Fungsi untuk memulai slide otomatis
function startAutoSlide() {
  setInterval(showNextProfile, 2500); // Ganti angka ini sesuai dengan kebutuhan waktu jeda
}

// Memulai slide otomatis
startAutoSlide();

// dsfd
const faqQuestions = document.querySelectorAll(".faq-question");

// Add click event listener to each question
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const toggleIcon = question.querySelector(".toggle-icon"); // Get the plus/minus icon

    // Toggle the display property (block/none) of the answer
    answer.style.display = answer.style.display === "none" ? "block" : "none";

    // Change the icon based on the answer visibility
    toggleIcon.textContent = answer.style.display === "none" ? "+" : "−"; // Unicode minus sign
  });
});
//
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonials = document.querySelectorAll(".testimonial");

// Salin testimoni untuk membuat efek uroboros
const duplicateTestimonials = Array.from(testimonials).map((testimonial) => testimonial.cloneNode(true));
duplicateTestimonials.forEach((testimonial) => testimonialContainer.appendChild(testimonial));

// Jalankan animasi scroll otomatis secara terus-menerus
const duration = 10; // Durasi animasi dalam detik
const keyframes = `
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-100% + ${testimonials[0].offsetWidth}px)); }
`;

testimonialContainer.style.animation = `scroll ${duration}s linear infinite`;
testimonialContainer.style.animationPlayState = "running"; // Jalankan animasi

// Tambahkan keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes scroll { ${keyframes} }`, styleSheet.cssRules.length);

// burger
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector("nav ul");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

function toggleAnswer(element) {
  var paragraph = element.querySelector("p");
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
}
