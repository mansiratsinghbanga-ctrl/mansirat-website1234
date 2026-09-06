/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =========================================
   REMEMBER THEME
========================================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =========================================
   PROJECT BUTTONS
========================================= */

const projectButtons =
    document.querySelectorAll(".project-btn");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectName =
            button.getAttribute("data-project");


        alert(
            projectName +
            " selected. You can connect this button to your actual project later."
        );

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been submitted.";


    contactForm.reset();

});


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();