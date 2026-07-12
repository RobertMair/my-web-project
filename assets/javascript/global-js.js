// ========== Load Header ========== //

document.addEventListener("DOMContentLoaded", () => {
            fetch("header.html")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to load header file.");
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById("header-placeholder").innerHTML = data;
                })
                .catch(error => console.error("Error loading header:", error));
        });

// ========== Footer ========== //

document.addEventListener("DOMContentLoaded", () => {
            fetch("footer.html")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to load footer file.");
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById("footer-placeholder").innerHTML = data;
                })
                .catch(error => console.error("Error loading footer:", error));
        });

// ========== Mobile Menu Toggle ========== //

function mobileMenu() {
    var menuToggle = document.getElementById('menuOpen');
    var mobileMenu = document.getElementById('mobileMenu');
    var bodyElement = document.body;

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

// ========== To Top Button ========== //

var toTopButton = document.getElementById("to-top-button");
// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) && window.innerWidth < 1280) {
        toTopButton.style.display = "block";
        toTopButton.classList.remove('fade-out');
        toTopButton.classList.add('fade-in');
    } else {
        toTopButton.classList.remove('fade-in');
        toTopButton.classList.add('fade-out');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth; // Gets viewport width
    if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) && window.innerWidth < 1280) {
        toTopButton.style.display = "block";
        toTopButton.classList.remove('fade-out');
        toTopButton.classList.add('fade-in');
    } else {
        toTopButton.classList.remove('fade-in');
        toTopButton.classList.add('fade-out');
    }
})

// ========== Await DOM element to be created before changing attributes by page specific js scripts ========== //

function waitForElement(selector) {
    return new Promise((resolve) => {
        // 1. Check if the element already exists right away
        const element = document.querySelector(selector);
        if (element) {
            return resolve(element);
        }

        // 2. If it does not exist, observe the DOM for changes
        const observer = new MutationObserver((mutations, obs) => {
            const element = document.querySelector(selector);
            if (element) {
                obs.disconnect(); // Stop observing to prevent memory leaks
                resolve(element);
            }
        });

        // 3. Start observing the entire document body for added nodes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}