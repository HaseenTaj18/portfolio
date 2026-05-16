// =========================
// Smooth Scroll for Navbar
// =========================
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "a MERN Stack Developer",
    "a Cyber Security Enthusiast",
    "an AI-Powered Project Builder",
    "a Problem Solver"
  ];

  const wrapper = document.querySelector(".changing-wrapper");
  if (!wrapper) return;

  let currentIndex = 0;
  let prev = wrapper.querySelector(".word");

  function showNextWord() {
    const nextIndex = (currentIndex + 1) % words.length;

    const nextWord = document.createElement("span");
    nextWord.className = "word";
    nextWord.textContent = words[nextIndex];
    wrapper.appendChild(nextWord);

    nextWord.offsetHeight;

    prev.classList.remove("word--visible");
    prev.classList.add("word--out");
    nextWord.classList.add("word--visible");

    setTimeout(() => {
      prev.remove();
      prev = nextWord;
    }, 600);

    currentIndex = nextIndex;
  }

  setInterval(showNextWord, 2500);
});


// =========================
// Sticky Navbar Background Change
// =========================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
    } else {
        header.style.background = "rgba(255, 255, 255, 0.7)";
        header.style.boxShadow = "none";
    }
});

// =========================
// Active Navbar Highlight
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

function activateMenu() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activateMenu);
// =============================
// HERO FADE-IN ON PAGE LOAD
// =============================
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    hero.classList.add("show");
});
// Fade-in on scroll
document.addEventListener("DOMContentLoaded", function () {
  const aboutCard = document.getElementById("aboutCard");

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutCard.classList.remove("hidden");
            obs.unobserve(aboutCard);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(aboutCard);
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    setTimeout(() => aboutCard.classList.remove("hidden"), 300);
  }
});


// =============================
// INTERSECTION OBSERVER FOR HERO
// =============================
const heroObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.3 }
);

heroObserver.observe(document.querySelector(".hero"));

// =============================
// BUTTON RIPPLE EFFECT
// =============================
document.querySelectorAll(".btn-primary, .btn-outline").forEach(btn => {
    btn.addEventListener("click", function(e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        let rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// =============================
// LIGHT PARALLAX MOUSE MOVEMENT
// =============================
const heroLeft = document.querySelector(".hero-left");
const heroRight = document.querySelector(".hero-right");

document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

    heroLeft.style.transform = `translate(${moveX}px, ${moveY}px)`;
    heroRight.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// =========================
// Fade-in Section Animation
// =========================
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".fade").forEach(section => {
    observer.observe(section);
});
// -------------------------------
//   SKILLS PROGRESS ANIMATION
// -------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-card");

    // Use Intersection Observer for smooth animation when scrolling
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.35, // triggers when 35% of card is visible
        }
    );

    skillCards.forEach(card => observer.observe(card));
});
// Simple scroll animation for certifications
const certCards = document.querySelectorAll('.cert-card');

window.addEventListener('scroll', () => {
  certCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    } else {
      card.style.opacity = 0;
      card.style.transform = 'translateY(50px)';
    }
  });
});

// =============================
// RAMYA-STYLE SCROLL REVEAL FOR PROJECTS
// =============================

// Add reveal animation class when card is visible
const projectCards = document.querySelectorAll('.project-card');

const observerOptions = {
    threshold: 0.2
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-show');
        }
    });
}, observerOptions);

projectCards.forEach((card, index) => {
    card.style.transitionDelay = (index * 0.15) + "s"; // Staggered animation
    revealOnScroll.observe(card);
});

// ===============================
// HOBBIES SECTION ANIMATION
// ===============================

// Select all hobby cards
const hobbyCards = document.querySelectorAll('.hobby-card');

// Intersection Observer options
const hobbyOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

// Observer callback function
const hobbyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-hobby');
        }
    });
}, hobbyOptions);

// Attach observer to each card
hobbyCards.forEach(card => {
    card.classList.add('hide-hobby'); // initial hidden state
    hobbyObserver.observe(card);
});

// --------------------------
// CONTACT SECTION ANIMATIONS
// --------------------------

// Fade-in contact on scroll
const contactSection = document.querySelector(".contact");

const observe = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

observer.observe(contactSection);

// Ripple on button click
document.querySelectorAll(".btn-primary").forEach(btn => {
    btn.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        let rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Fake submit animation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    alert("Message sent successfully! (Demo mode)");
    this.reset();
});
