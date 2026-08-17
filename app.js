/* =====================================================
   PORTFOLIO JAVASCRIPT
   Abhishek Niraj - Data Engineer Portfolio
====================================================== */


/* =====================================================
   DOM ELEMENTS
====================================================== */

const scrollToTopBtn =
    document.getElementById("scrollToTopBtn");

const contactForm =
    document.getElementById("contactForm");

const statusMessage =
    document.getElementById("statusMessage");

const contactSubmitBtn =
    document.getElementById("contactSubmitBtn");

const mobileMenuToggle =
    document.getElementById("mobileMenuToggle");

const mobileMenuClose =
    document.getElementById("mobileMenuClose");

const mobileMenuOverlay =
    document.getElementById("mobileMenuOverlay");

const sidemenu =
    document.getElementById("sidemenu");


/* =====================================================
   TAB SWITCHING
====================================================== */

function opentab(tabName) {

    const contents =
        document.querySelectorAll(".tab-contents");

    const tabs =
        document.querySelectorAll(".tab-links");


    contents.forEach(function (content) {

        content.classList.remove("active-tab");

    });


    tabs.forEach(function (tab) {

        tab.classList.remove("active-link");

    });


    const selectedContent =
        document.getElementById(tabName);


    if (selectedContent) {

        selectedContent.classList.add("active-tab");

    }


    tabs.forEach(function (tab) {

        const onclickValue =
            tab.getAttribute("onclick");


        if (
            onclickValue &&
            onclickValue.includes("'" + tabName + "'")
        ) {

            tab.classList.add("active-link");

        }

    });

}


/* =====================================================
   MOBILE MENU (3-DOT / KEBAB TOGGLE)
   Opens/closes the off-canvas nav panel. Guards every
   DOM lookup so nothing breaks (and no blank screen)
   if an element is ever missing.
====================================================== */

function openMobileMenu() {

    if (!sidemenu) {
        return;
    }

    sidemenu.classList.add("active");

    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.add("active");
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute("aria-expanded", "true");
    }

    document.body.style.overflow = "hidden";

}


function closeMobileMenu() {

    if (!sidemenu) {
        return;
    }

    sidemenu.classList.remove("active");

    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("active");
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute("aria-expanded", "false");
    }

    document.body.style.overflow = "";

}


if (mobileMenuToggle && sidemenu) {

    mobileMenuToggle.addEventListener(
        "click",
        function () {

            if (sidemenu.classList.contains("active")) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );

}


if (mobileMenuClose) {

    mobileMenuClose.addEventListener(
        "click",
        closeMobileMenu
    );

}


if (mobileMenuOverlay) {

    mobileMenuOverlay.addEventListener(
        "click",
        closeMobileMenu
    );

}


/* Close the panel automatically once any nav item
   (Home / About / Skills / Projects / Certifications /
   Resume / Contact) is clicked, so the user lands
   directly on that section. */

document
    .querySelectorAll("#sidemenu a.nav-link")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* Close on Escape key for accessibility */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* Close automatically if the window is resized back
   to desktop width while the panel is open */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 900) {

            closeMobileMenu();

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


resumeButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            /*
             * Resume opening is handled
             * directly through HTML.
             */

        }
    );

});


/* =====================================================
   SCROLL TO TOP
   (rAF-throttled for smoother performance on scroll)
====================================================== */

let scrollTicking = false;


function handleScrollEffects() {

    if (scrollToTopBtn) {

        if (window.scrollY > 300) {

            scrollToTopBtn.classList.add("show");

        } else {

            scrollToTopBtn.classList.remove("show");

        }

    }


    updateActiveNavigation();


    scrollTicking = false;

}


window.addEventListener(
    "scroll",
    function () {

        if (!scrollTicking) {

            window.requestAnimationFrame(handleScrollEffects);

            scrollTicking = true;

        }

    },
    {
        passive: true
    }
);


if (scrollToTopBtn) {

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
        "nav ul a[href^='#']"
    );


const sections =
    document.querySelectorAll(
        "section[id], #home"
    );


function updateActiveNavigation() {

    let currentSection = "home";


    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(function (section) {

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

    });


    navLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");


        link.classList.toggle(
            "active-nav",
            href === "#" + currentSection
        );

    });

}


/* =====================================================
   INITIAL ACTIVE NAVIGATION
====================================================== */

updateActiveNavigation();


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

            typeSpeed: 70,

            backSpeed: 45,

            backDelay: 2200,

            startDelay: 500,

            loop: true,

            showCursor: true,

            cursorChar: "|"

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

            typeSpeed: 28,

            backSpeed: 0,

            backDelay: 5000,

            startDelay: 4200,

            loop: true,

            showCursor: true,

            cursorChar: "|"

        }
    );

}


/* =====================================================
   EMAILJS INITIALIZATION
====================================================== */

if (typeof emailjs !== "undefined") {

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

                contactSubmitBtn.disabled = true;

            }


            showStatus(
                "Sending message...",
                "loading"
            );


            /* -----------------------------------------
               EMAILJS PARAMETERS
            ----------------------------------------- */

            const templateParams = {

                from_name: name,

                from_email: email,

                message: message

            };


            try {

                if (typeof emailjs === "undefined") {

                    throw new Error(
                        "EmailJS library not loaded."
                    );

                }


                const response =
                    await emailjs.send(
                        "service_qtbzwds",
                        "template_p980pca",
                        templateParams
                    );


                console.log(
                    "EMAILJS SUCCESS",
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

                    contactSubmitBtn.disabled = false;

                }

            }

        }
    );

}


/* =====================================================
   STATUS MESSAGE
====================================================== */

function showStatus(message, type) {

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
    .forEach(function (image) {

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

    });


/* =====================================================
   INTERNAL NAVIGATION
   Smooth scrolling with reliable section targeting.
   Works for both the desktop nav and the mobile
   off-canvas panel (menu-close is handled separately
   above via the .nav-link listeners).
====================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });


                /*
                 * Keep browser URL synchronized
                 * without jumping instantly.
                 */

                if (
                    history.pushState
                ) {

                    history.pushState(
                        null,
                        "",
                        targetId
                    );

                }

            }
        );

    });


/* =====================================================
   PAGE LOAD SAFETY
====================================================== */

window.addEventListener(
    "load",
    function () {

        updateActiveNavigation();

    }
);
