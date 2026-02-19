/* =============== Typing Effect =============== */
const textList = [
  "GIS & Geomatics Engineer",
  "Front-End Developer",
  "Utility Network Analyst",
  "Spatial Data Analyst",
  "Network Analyst"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex === textList[index].length) {
    setTimeout(() => {
      eraseEffect();
    }, 1500);
    return;
  }

  currentText += textList[index][charIndex];
  typingElement.textContent = currentText;
  charIndex++;
  setTimeout(typeEffect, 80);
}

function eraseEffect() {
  if (charIndex === 0) {
    index = (index + 1) % textList.length;
    currentText = "";
    typeEffect();
    return;
  }

  currentText = currentText.slice(0, -1);
  typingElement.textContent = currentText;
  charIndex--;
  setTimeout(eraseEffect, 50);
}

typeEffect();



  document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth'
  });
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// فتح / غلق القائمة عند الضغط على Burger
burger.addEventListener('click', (e) => {
  nav.classList.toggle('active');
  e.stopPropagation(); // يمنع الضغط من الوصول للـ document
});

// غلق القائمة عند الضغط خارجها
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active')) {
    // لو الضغط مش على nav ولا burger
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove('active');
    }
  }
});

  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".certificate-card").forEach(card => {
    card.addEventListener("click", () => {
      let imgName = card.getAttribute("data-cert");
      popupImg.src = imgName;
      popup.style.display = "flex";
    });
  });

  closeBtn.onclick = () => {
    popup.style.display = "none";
  };

  popup.onclick = (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  };


