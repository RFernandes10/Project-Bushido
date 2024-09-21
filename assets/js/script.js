// Progress bars animation
const modal = document.getElementById("myModal");
const btn = document.querySelector(".learn-more");
const span = document.getElementsByClassName("close")[0];
const progressBars = document.querySelectorAll(".progress");

btn.onclick = function () {
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("show");
    animateSkillBars();
  }, 50);
};

span.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function animateSkillBars() {
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    gsap.to(bar, {
      width: `${width}%`,
      duration: 1.5,
      ease: "power2.out",
    });
  });
}

// Card hover effect
const card = document.querySelector(".card");
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const angleX = (y - centerY) / 20;
  const angleY = (centerX - x) / 20;

  gsap.to(card, {
    rotationX: angleX,
    rotationY: angleY,
    duration: 0.5,
    ease: "power2.out",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotationX: 0,
    rotationY: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});

// Parallax effect for card image
card.addEventListener("mousemove", (e) => {
  const cardImage = card.querySelector(".card-image");
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const moveX = (x - rect.width / 2) / 20;
  const moveY = (y - rect.height / 2) / 20;

  gsap.to(cardImage, {
    x: moveX,
    y: moveY,
    duration: 0.5,
    ease: "power2.out",
  });
});

card.addEventListener("mouseleave", () => {
  const cardImage = card.querySelector(".card-image");
  gsap.to(cardImage, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});