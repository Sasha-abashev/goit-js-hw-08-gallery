const gallery = document.querySelector(".gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.querySelector(".modal__close");

// Відкриття
gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const imgEl = event.target.closest("img.gallery__image");
  if (!imgEl) return;

  const largeImageURL = imgEl.dataset.source;
  modalImg.src = largeImageURL;
  modal.style.display = "flex"; // ВАЖЛИВО: flex, не block
});

// Закриття на ✖
modalClose.addEventListener("click", () => {
  closeModal();
});

// Закриття при кліку по фону (але не по зображенню)
modal.addEventListener("click", (event) => {
  if (event.target === modal || event.target === modalImg.parentElement) {
    closeModal();
  }
});

// Закриття по Escape
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  modalImg.src = "";
}
