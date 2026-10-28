
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// Replace this with your own email address.
const portfolioEmail = "your-email@example.com";

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("form-status");

        if (!name || !email || !message) {
            status.textContent = "Please fill in all the fields.";
            return;
        }

        if (portfolioEmail === "your-email@example.com") {
            status.textContent =
                "Please add your email address in script.js first.";
            return;
        }

        const subject = encodeURIComponent("Portfolio message from " + name);
        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        status.textContent = "Opening your email application...";

        window.location.href =
            "mailto:" + portfolioEmail +
            "?subject=" + subject + "&body=" + body;
    });
}
