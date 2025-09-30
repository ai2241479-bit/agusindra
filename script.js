// Animasi karakter berjalan (contoh sederhana)
document.addEventListener("keydown", (e) => {
  const character = document.querySelector(".character");
  if (e.key === "ArrowRight") {
    character.style.transform = "translateX(100px)";
  }
});
