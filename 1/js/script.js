'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event triggered');


    // --- Helper Function: Add Events on Multiple Elements ---
    const addEventOnElements = function (elements, eventType, callback) {
        for (let i = 0, len = elements.length; i < len; i++) {
            elements[i].addEventListener(eventType, callback);
        }
    }

    // --- Mobile Navbar ---

    const navbar = document.querySelector("[data-navbar]");
    const navToggler = document.querySelector("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    const toggleNav = function () {
        navbar.classList.toggle("active");
        this.classList.toggle("active");
    }

    navToggler.addEventListener("click", toggleNav);

    const navClose = () => {
        navbar.classList.remove("active");
        navToggler.classList.remove("active");
    }

    addEventOnElements(navLinks, "click", navClose);

    // --- Header / Back to Top Button ---

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const activeEl = function () {
        if (window.scrollY > 100) {
            header.classList.add("active");
            backTopBtn.classList.add("active");
        } else {
            header.classList.remove("active");
            backTopBtn.classList.remove("active");
        }
    } 

    window.addEventListener("scroll", activeEl);

    // --- Button Hover Ripple Effect ---

    const buttons = document.querySelectorAll("[data-btn]");

    const buttonHoverRipple = function (event) {
        this.style.setProperty("--top", `${event.offsetY}px`);
        this.style.setProperty("--left", `${event.offsetX}px`); 
    }

    addEventOnElements(buttons, "mousemove", buttonHoverRipple);

    // --- Scroll Reveal ---

    const revealElements = document.querySelectorAll("[data-reveal]");

    const revealElementOnScroll = function () {
        for (let i = 0, len = revealElements.length; i < len; i++) {
            const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

            if (isElementInsideWindow) {
                revealElements[i].classList.add("revealed");
            }
        }
    }

    window.addEventListener("scroll", revealElementOnScroll);

    window.addEventListener("load", revealElementOnScroll);


    // --- Custom Cursor ---

    const cursor = document.querySelector("[data-cursor]");
    const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

    const cursorMove = function (event) {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
    }

    window.addEventListener("mousemove", cursorMove);

    addEventOnElements(hoverElements, "mouseover", function () {
        cursor.classList.add("hovered");
    });

    addEventOnElements(hoverElements, "mouseout", function () {
        cursor.classList.remove("hovered");
    });


});

  // --- Privacy and Policy Button ---

  const privacyPolicyButton = document.getElementById('privacyPolicyButton');
  const privacyPolicyContainer = document.getElementById('privacyPolicyContainer');
  const closePrivacyPolicyButton = document.getElementById('closePrivacyPolicy');

  if (privacyPolicyButton && privacyPolicyContainer && closePrivacyPolicyButton) {
      privacyPolicyButton.addEventListener('click', function () {
          privacyPolicyContainer.style.display = 'block';
      });

      closePrivacyPolicyButton.addEventListener('click', function () {
          privacyPolicyContainer.style.display = 'none';
      });
  } else {
      console.error('Privacy and Policy button or container not found');
  }

   //--- podstranky ---
   
document.getElementById('Group 04').addEventListener('click', function() {
    window.open('Group 04.html', '_blank');
  });
  document.getElementById('Group 05').addEventListener('click', function() {
    window.open('Group 05.html', '_blank');
  });
  document.getElementById('Group 02').addEventListener('click', function() {
    window.open('Group 02.html', '_blank');
  });
  openSubpage

  /** Youtube video */

  // Load the YouTube IFrame Player API asynchronously
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

// Function called by YouTube API when player is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'eWOuuwrREh0', 
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'rel': 0,
      'showinfo': 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

// Send Email

function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
    }

    emailjs.send("service_t63d8fn","template_3xmdxj9",parms) 
}


