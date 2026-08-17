/* =========================================================
   MOBILE MENU
========================================================= */

const sidemenu = document.getElementById("sidemenu");

function openmenu() {

    if (sidemenu) {
        sidemenu.style.right = "0";
    }

}

function closemenu() {

    if (sidemenu) {
        sidemenu.style.right = "-280px";
    }

}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#sidemenu a").forEach(link => {

    link.addEventListener("click", () => {
        closemenu();
    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active-nav");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active-nav");

        }

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   RESUME BUTTONS
========================================================= */

const resumeURL =
    "https://drive.google.com/file/d/1jSyB3jhLuHW2nPoS-sqFdkkmDS4q_1UY/view?usp=sharing";


const resumeButton1 =
    document.getElementById("resume-button-1");

const resumeButton2 =
    document.getElementById("resume-button-2");


if (resumeButton1) {

    resumeButton1.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.open(
                resumeURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


if (resumeButton2) {

    resumeButton2.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.open(
                resumeURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   EMAILJS
========================================================= */

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "QFXGomMr5FbDoybBR"
    });

}


const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        sendEmail
    );

}


function sendEmail(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const statusMessage =
        document.getElementById("statusMessage");


    if (!name || !email || !message) {

        statusMessage.textContent =
            "Please fill in all fields.";

        statusMessage.style.color =
            "#ff5252";

        return;

    }


    const templateParams = {

        from_name: name,

        from_email: email,

        message: message

    };


    statusMessage.textContent =
        "Sending message...";

    statusMessage.style.color =
        "#aaa";


    emailjs
        .send(
            "service_qtbzwds",
            "template_p980pca",
            templateParams
        )

        .then(response => {

            console.log(
                "SUCCESS!",
                response.status,
                response.text
            );

            statusMessage.textContent =
                "Message sent successfully!";

            statusMessage.style.color =
                "#55ff9a";

            contactForm.reset();

        })

        .catch(error => {

            console.error(
                "EMAILJS ERROR:",
                error
            );

            statusMessage.textContent =
                "Failed to send message. Please try again.";

            statusMessage.style.color =
                "#ff5252";

        });

}


/* =========================================================
   PROJECT IMAGE ERROR HANDLING
========================================================= */

/*
   If one of the uploaded project images is missing,
   the broken-image icon will NOT be shown.
*/

document.querySelectorAll(".project-image img")
    .forEach(image => {

        image.addEventListener(
            "error",
            function () {

                this.style.display = "none";

                const parent =
                    this.closest(".project-image");

                if (parent) {

                    parent.classList.add(
                        "project-placeholder"
                    );

                    parent.innerHTML += `
                        <div class="placeholder-icon">
                            <i class="fa-solid fa-database"></i>
                        </div>
                    `;

                }

            }
        );

    });


/* =========================================================
   SKILLS IMAGE ERROR HANDLING
========================================================= */

const skillsImage =
    document.querySelector(
        ".skills-image-card img"
    );


if (skillsImage) {

    skillsImage.addEventListener(
        "error",
        function () {

            this.style.display = "none";

            const parent =
                this.closest(".skills-image-card");

            if (parent) {

                parent.style.minHeight = "360px";

                parent.style.display = "flex";

                parent.style.alignItems =
                    "center";

                parent.style.justifyContent =
                    "center";

                parent.innerHTML = `

                    <div style="
                        text-align:center;
                        padding:40px;
                    ">

                        <i
                            class="fa-solid fa-database"
                            style="
                                font-size:55px;
                                color:#ff3b3b;
                                margin-bottom:20px;
                            "
                        ></i>

                        <h3>
                            Data Engineering
                        </h3>

                        <p style="
                            color:#888;
                            margin-top:8px;
                        ">
                            Azure • Databricks • PySpark • SQL
                        </p>

                    </div>

                `;

            }

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.innerHTML =
        `© ${currentYear} Abhishek Niraj.
         Built with passion for data engineering.`;

}


/* =========================================================
   TYPING / REVEAL EFFECT
========================================================= */

const heroLine =
    document.querySelector(".animated-line");


if (heroLine) {

    heroLine.classList.add(
        "typing-ready"
    );

}


/* =========================================================
   CURSOR INTERACTION FOR CARDS
========================================================= */

const interactiveCards =
    document.querySelectorAll(
        ".skill-card, .project-card, .cert-card"
    );


interactiveCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        }
    );

});


/* =========================================================
   PREVENT IMAGE DRAGGING
========================================================= */

document.querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "dragstart",
            event => event.preventDefault()
        );

    });
