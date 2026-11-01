
/* MOBILE MENU */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");

  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});

/* CLOSE MENU AFTER CLICKING A LINK */
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* AUTOMATIC FOOTER YEAR */
document.getElementById("year").textContent =
  new Date().getFullYear();

/* GALLERY LIGHTBOX */
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const largeImage = document.createElement("img");
    largeImage.src = image.src;
    largeImage.alt = image.alt;

    const closeButton = document.createElement("button");
    closeButton.className = "lightbox-close";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Close image");

    lightbox.appendChild(largeImage);
    lightbox.appendChild(closeButton);
    document.body.appendChild(lightbox);

    function closeLightbox() {
      lightbox.remove();
      document.removeEventListener("keydown", handleKey);
    }

    function handleKey(event) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", handleKey);
  });
});

/* CONTACT ENQUIRY FORM */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const eventType = document.getElementById("eventType").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !eventType || !message) {
    formStatus.textContent = "Please fill in all the fields.";
    return;
  }

  const subject = "New Event Enquiry - Aura Events & Co.";

  const body =
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Event Type: " + eventType + "\n" +
    "Message: " + message;

  const emailLink =
    "mailto:auraeventsco25@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  formStatus.textContent =
    "Opening your email app. Please send the prepared enquiry.";

  window.location.href = emailLin;
});
