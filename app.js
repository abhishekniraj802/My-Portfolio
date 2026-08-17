/* =========================================================
   MOBILE MENU
========================================================= */

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.classList.add("open");
}

function closemenu() {
    sidemenu.classList.remove("open");
}


/* =========================================================
   CLOSE MOBILE MENU AFTER NAVIGATION
========================================================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        closemenu();

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   HERO TYPING ANIMATION
========================================================= */

const heroType =
    document.getElementById("heroType");

const heroText =
    "Data Engineer specializing in Azure Databricks, PySpark & SQL";

let typeIndex = 0;

function typeHeroText() {

    if (
        typeIndex <= heroText.length
    ) {

        heroType.textContent =
            heroText.substring(
                0,
                typeIndex
            );

        typeIndex++;

        setTimeout(
            typeHeroText,
            38
        );

    }

}

window.addEventListener(
    "load",
    typeHeroText
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".glass-card, .project-card, .cert-card, .skill-category"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "scroll-hidden"
    );

    observer.observe(element);

});


/* =========================================================
   RESUME
========================================================= */

const resumeUrl =
    "https://drive.google.com/file/d/1jSyB3jhLuHW2nPoS-sqFdkkmDS4q_1UY/view?usp=sharing";


function openResume(event) {

    event.preventDefault();

    window.open(
        resumeUrl,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   EMAILJS
========================================================= */

if (
    typeof emailjs !== "undefined"
) {

    emailjs.init({

        publicKey:
            "QFXGomMr5FbDoybBR"

    });


    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const statusMessage =
                    document.getElementById(
                        "statusMessage"
                    );


                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    statusMessage.textContent =
                        "Please fill in all fields.";

                    statusMessage.style.color =
                        "#ff4d55";

                    return;

                }


                statusMessage.textContent =
                    "Sending...";

                statusMessage.style.color =
                    "#aaaaaa";


                const templateParams = {

                    from_name:
                        name,

                    from_email:
                        email,

                    message:
                        message

                };


                emailjs
                    .send(
                        "service_qtbzwds",
                        "template_p980pca",
                        templateParams
                    )

                    .then(() => {

                        statusMessage.textContent =
                            "Message sent successfully!";

                        statusMessage.style.color =
                            "#4ade80";

                        contactForm.reset();

                    })

                    .catch(error => {

                        console.error(
                            "EmailJS error:",
                            error
                        );

                        statusMessage.textContent =
                            "Failed to send message. Please try again.";

                        statusMessage.style.color =
                            "#ff4d55";

                    });

            }
        );

    }

}


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();
