const accordion = document.getElementById("accordionFlushExample");

accordion.addEventListener("shown.bs.collapse", function (event) {
  const element = event.target; // Atskleistas elementas

  // Patikriname, ar elementas yra matomas viršuje
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Jei elementas nėra visiškai matomas viršuje (viršuje gali būti mažiau nei 150px)
  if (rect.top < 0 || rect.top > windowHeight - 150) {
    // Paslinkti į elementą su 150px offsetu
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -450); // Paslinkti 150px aukščiau
  }
});

const galleryScroll = document.getElementById("galleryScroll");
const originalItems = Array.from(galleryScroll.children);
let isDown = false;
let startX;
let scrollLeft;

// Drag to scroll
galleryScroll.addEventListener("mousedown", (e) => {
  isDown = true;
  galleryScroll.classList.add("active");
  startX = e.pageX - galleryScroll.offsetLeft;
  scrollLeft = galleryScroll.scrollLeft;
});

galleryScroll.addEventListener("mouseleave", () => {
  isDown = false;
});

galleryScroll.addEventListener("mouseup", () => {
  isDown = false;
});

galleryScroll.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - galleryScroll.offsetLeft;
  const walk = (x - startX) * 1;
  galleryScroll.scrollLeft = scrollLeft - walk;
});

// Infinite clone
let cloneCooldown = false;

galleryScroll.addEventListener("scroll", () => {
  const { scrollLeft, clientWidth, scrollWidth } = galleryScroll;

  if (scrollLeft + clientWidth >= scrollWidth - clientWidth && !cloneCooldown) {
    cloneCooldown = true;

    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      galleryScroll.appendChild(clone);
    });

    setTimeout(() => {
      cloneCooldown = false;
    }, 300);
  }
});
