/* =====================================================
   PORTFOLIO JAVASCRIPT
   Abhishek Niraj - Data Engineer Portfolio
====================================================== */


/* =====================================================
   DOM ELEMENTS
====================================================== */

const sidemenu =
    document.getElementById("sidemenu");

const menuToggle =
    document.getElementById("menuToggle");

const scrollToTopBtn =
    document.getElementById("scrollToTopBtn");

const contactForm =
    document.getElementById("contactForm");

const statusMessage =
    document.getElementById("statusMessage");

const contactSubmitBtn =
    document.getElementById("contactSubmitBtn");


/* =====================================================
   TAB SWITCHING
====================================================== */

function opentab(tabName) {

    const contents =
        document.querySelectorAll(".tab-contents");

    const tabs =
        document.querySelectorAll(".tab-links");


    contents.forEach((content) => {

        content.classList.remove("active-tab");

    });


    tabs.forEach((tab) => {

        tab.classList.remove("active-link");

    });


    const selectedContent =
        document.getElementById(tabName);


    if (selectedContent) {

        selectedContent.classList.add("active-tab");

    }


    tabs.forEach((tab) => {

        const onclickValue =
            tab.getAttribute("onclick");


        if (
            onclickValue &&
            onclickValue.includes(`'${tabName}'`)
        ) {

            tab.classList.add("active-link");

        }

    });

}


/* =====================================================
   MOBILE MENU
====================================================== */

function openmenu() {

    if (!sidemenu) {

        return;

    }


    sidemenu.classList.add("active");

    document.body.classList.add("menu-open");


    if (menuToggle) {

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    }

}


/* =====================================================
   CLOSE MOBILE MENU
====================================================== */

function closemenu() {

    if (!sidemenu) {

        return;

    }


    sidemenu.classList.remove("active");

    document.body.classList.remove("menu-open");


    if (menuToggle) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

}


/* =====================================================
   TOGGLE MOBILE MENU
====================================================== */

function toggleMenu() {

    if (!sidemenu) {

        return;

    }


    const isOpen =
        sidemenu.classList.contains("active");


    if (isOpen) {

        closemenu();

    } else {

        openmenu();

    }

}


/* =====================================================
   MENU BUTTON CLICK
====================================================== */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMenu
    );


    menuToggle.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                toggleMenu();

            }

        }
    );

}


/* =====================================================
   CLOSE MENU AFTER NAVIGATION
====================================================== */

document
    .querySelectorAll("#sidemenu a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            function () {

                closemenu();

            }
        );

    });


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
====================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (!sidemenu || !menuToggle) {

            return;

        }


        const clickedInsideMenu =
            sidemenu.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);


        if (
            sidemenu.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            closemenu();

        }

    }
);


/* =====================================================
   CLOSE MENU WITH ESCAPE
====================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            sidemenu &&
            sidemenu.classList.contains("active")
        ) {

            closemenu();

            if (menuToggle) {

                menuToggle.focus();

            }

        }

    }
);


/* =====================================================
   CLOSE MENU IF SCREEN BECOMES DESKTOP
====================================================== */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 900 &&
            sidemenu &&
            sidemenu.classList.contains("active")
        ) {

            closemenu();

        }

    }
);


/* =====================================================
   RESUME
====================================================== */

const resumeButtons =
    document.querySelectorAll(
        "#resume-button-1, #resume-button-2"
    );


resumeButtons.forEach((button) => {

    button.addEventListener(
        "click",
        function () {

            /*
             * Resume is handled directly
             * by the download attribute.
             */

        }
    );

});


/* =====================================================
   SCROLL TO TOP
====================================================== */

if (scrollToTopBtn) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 300) {

                scrollToTopBtn.classList.add("show");

            } else {

                scrollToTopBtn.classList.remove("show");

            }

        },
        {
            passive: true
        }
    );


    scrollToTopBtn.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =====================================================
   ACTIVE NAVIGATION
====================================================== */

const navLinks =
    document.querySelectorAll(
        "#sidemenu a[href^='#']"
    );


const sections =
    document.querySelectorAll(
        "section[id], #home"
    );


function updateActiveNavigation() {

    let currentSection = "home";


    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navLinks.forEach(
        function (link) {

            const href =
                link.getAttribute("href");


            link.classList.toggle(
                "active-nav",
                href === `#${currentSection}`
            );

        }
    );

}


/* Initial navigation state */

updateActiveNavigation();


/* Update navigation while scrolling */

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


/* =====================================================
   TYPED HERO TITLE
====================================================== */

if (
    typeof Typed !== "undefined" &&
    document.querySelector(".auto-type")
) {

    new Typed(
        ".auto-type",
        {

            strings: [

                "Data Engineer",

                "Azure Databricks Specialist"

            ],

            typeSpeed:
                70,

            backSpeed:
                45,

            backDelay:
                2200,

            startDelay:
                500,

            loop:
                true,

            showCursor:
                true,

            cursorChar:
                "|"

        }
    );

}


/* =====================================================
   TYPED HERO DESCRIPTION
====================================================== */

if (
    typeof Typed !== "undefined" &&
    document.querySelector(".hero-description-type")
) {

    new Typed(
        ".hero-description-type",
        {

            strings: [

                "Building scalable, reliable data pipelines and cloud data platforms using Databricks, Azure Data Factory, ADLS Gen2, Delta Lake, Medallion Architecture. Experienced in enterprise data migration, ETL modernization, data quality, and production-grade pipeline validation."

            ],

            typeSpeed:
                28,

            backSpeed:
                0,

            backDelay:
                5000,

            startDelay:
                4200,

            loop:
                true,

            showCursor:
                true,

            cursorChar:
                "|"

        }
    );

}


/* =====================================================
   EMAILJS INITIALIZATION
====================================================== */

if (
    typeof emailjs !== "undefined"
) {

    emailjs.init({

        publicKey:
            "QFXGomMr5FbDoybBR"

    });

}


/* =====================================================
   CONTACT FORM
====================================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const messageInput =
                document.getElementById("message");


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            const message =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            /* -----------------------------------------
               VALIDATION
            ----------------------------------------- */

            if (
                !name ||
                !email ||
                !message
            ) {

                showStatus(
                    "Please fill in all fields.",
                    "error"
                );

                return;

            }


            /* Basic email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                showStatus(
                    "Please enter a valid email address.",
                    "error"
                );

                return;

            }


            /* -----------------------------------------
               PREVENT DOUBLE SUBMISSION
            ----------------------------------------- */

            if (contactSubmitBtn) {

                contactSubmitBtn.disabled =
                    true;

            }


            showStatus(
                "Sending message...",
                "loading"
            );


            /* -----------------------------------------
               EMAILJS PARAMETERS
            ----------------------------------------- */

            const templateParams = {

                from_name:
                    name,

                from_email:
                    email,

                message:
                    message

            };


            try {

                const response =
                    await emailjs.send(
                        "service_qtbzwds",
                        "template_p980pca",
                        templateParams
                    );


                console.log(
                    "SUCCESS!",
                    response.status,
                    response.text
                );


                showStatus(
                    "Message sent successfully!",
                    "success"
                );


                contactForm.reset();

            }

            catch (error) {

                console.error(
                    "EMAILJS ERROR:",
                    error
                );


                showStatus(
                    "Failed to send message. Please try again.",
                    "error"
                );

            }

            finally {

                if (contactSubmitBtn) {

                    contactSubmitBtn.disabled =
                        false;

                }

            }

        }
    );

}


/* =====================================================
   STATUS MESSAGE
====================================================== */

function showStatus(
    message,
    type
) {

    if (!statusMessage) {

        return;

    }


    statusMessage.textContent =
        message;


    if (type === "success") {

        statusMessage.style.color =
            "#35d07f";

    }

    else if (type === "error") {

        statusMessage.style.color =
            "#ff4040";

    }

    else {

        statusMessage.style.color =
            "#aaa";

    }

}


/* =====================================================
   IMAGE SAFETY
====================================================== */

document
    .querySelectorAll("img")
    .forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    if (
                        image.classList.contains(
                            "project-image"
                        )
                    ) {

                        image.style.background =
                            "#151515";

                    }

                }
            );

        }
    );
