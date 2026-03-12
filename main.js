// ===== TYPING ANIMATION =====
const phrases = [
  "Full Stack Developer",
  "Machine Learning Enthusiast",
  "AI Enthusiast",
  "Aspiring Software Developer",
  "Problem Solver",
  "Web developer"
];

const typedText = document.getElementById("typed-text");
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;

function type() {
  const current = phrases[currentPhrase];
  typedText.textContent = current.substring(0, currentLetter);

  if (!isDeleting && currentLetter < current.length) {
    currentLetter++;
    setTimeout(type, 100);
  } else if (isDeleting && currentLetter > 0) {
    currentLetter--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

// ===== TAB FUNCTIONALITY =====
function opentab(evt, tabname) {
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  for (let tablink of tablinks) tablink.classList.remove("active-link");
  for (let tabcontent of tabcontents) tabcontent.classList.remove("active-tab");

  evt.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ===== MOBILE MENU FUNCTIONALITY =====
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "-30px";
  const menuIcon = document.getElementById("menu-icon");
  if (menuIcon) menuIcon.style.display = "none";
}

function closemenu() {
  sidemenu.style.right = "-100%";
  const menuIcon = document.getElementById("menu-icon");
  if (menuIcon) menuIcon.style.display = "block";
}

// ===== THEME TOGGLE FUNCTIONALITY =====
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const logoImg = document.getElementById("logo-img");
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "bright") {
    body.removeAttribute("data-theme");
    themeIcon.className = "fas fa-sun";
    logoImg.src = "images/logo.png";
    localStorage.setItem("theme", "dark");
  } else {
    body.setAttribute("data-theme", "bright");
    themeIcon.className = "fas fa-moon";
    logoImg.src = "images/bright-logo.png";
    localStorage.setItem("theme", "bright");
  }
}

// ===== LOAD SAVED THEME, INIT TYPING, AND SETUP FORM ON PAGE LOAD =====
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const themeIcon = document.getElementById("theme-icon");
  const logoImg = document.getElementById("logo-img");

  if (savedTheme === "bright") {
    document.body.setAttribute("data-theme", "bright");
    themeIcon.className = "fas fa-moon";
    logoImg.src = "images/bright-logo.png";
  } else {
    themeIcon.className = "fas fa-sun";
    logoImg.src = "images/logo.png";
  }

  // Start typing animation after DOM is ready
  if (typedText) {
    type();
  }

  // Google Sheets form submission
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyDSFfrPIzN4_SxQ_TWYTaiyOvPE_-yfM3vlVZSZ9Ph6bnJqjw6rrV3G4GKeEk8y9LU/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      msg.innerHTML = "Message sent successfully";
      msg.classList.add("show");

      form.reset();

      setTimeout(function () {
        msg.classList.remove("show");
        setTimeout(function () {
          msg.innerHTML = "";
        }, 300);
      }, 5000);

      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }
});

