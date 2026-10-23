(() => {
  const envelope = document.getElementById("openInvite");
  const modal = document.getElementById("inviteModal");
  const hint = document.getElementById("envelopeHint");
  let modalTimer;

  function openInvitation() {
    if (envelope.classList.contains("opened")) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      return;
    }
    envelope.classList.add("opened");
    hint.textContent = "Your invitation is opening…";
    clearTimeout(modalTimer);
    modalTimer = setTimeout(() => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      hint.textContent = "Invitation opened — tap again to view it";
    }, 850);
  }
  envelope.addEventListener("click", openInvitation);

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  modal.querySelector(".modal-continue").addEventListener("click", closeModal);

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  document.querySelectorAll(".photo-slot").forEach(slot => {
    const src = slot.dataset.photo;
    const probe = new Image();
    probe.onload = () => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = slot.getAttribute("aria-label") || "Wedding gallery photo";
      slot.appendChild(img);
      slot.classList.add("has-photo");
    };
    probe.src = src;
    slot.addEventListener("click", () => {
      if (!slot.classList.contains("has-photo")) return;
      lightboxImage.src = src;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeModal(); closeLightbox(); }
  });

  // A restrained petal drift effect; automatically reduced for users who prefer less motion.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const layer = document.querySelector(".petal-layer");
    const colors = ["#b82945", "#d8a36b", "#f0c6b2", "#8e243a"];
    for (let i = 0; i < 18; i++) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = (Math.random() * 100) + "%";
      petal.style.background = colors[i % colors.length];
      petal.style.animationDuration = (12 + Math.random() * 17) + "s";
      petal.style.animationDelay = (-Math.random() * 25) + "s";
      petal.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
      petal.style.transform = "scale(" + (.55 + Math.random() * .9) + ")";
      layer.appendChild(petal);
    }
  }
})();
