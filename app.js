/* =====================================================
   PORTFOLIO JAVASCRIPT
   Abhishek Niraj - Data Engineer Portfolio
====================================================== */


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

const sidemenu =
    document.getElementById("sidemenu");


function openmenu() {

    if (sidemenu) {

        sidemenu.classList.add("active");

    }

}


function closemenu() {

    if (sidemenu) {

        sidemenu.classList.remove("active");

    }

}


/* Close menu when navigation link is clicked */

document
    .querySelectorAll("#sidemenu a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            closemenu
        );

    });


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
             * Resume is handled directly by the
             * download attribute in HTML.
             */

        }
    );

});


/* =====================================================
   SCROLL TO TOP BUTTON
====================================================== */

const scrollToTopBtn =
    document.getElementById("scrollToTopBtn");


if (scrollToTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollToTopBtn.classList.add("show");

        } else {

            scrollToTopBtn.classList.remove("show");

        }

    });


    scrollToTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =====================================================
   ACTIVE LINK HIGHLIGHTING
====================================================== */

function highlightActiveLink() {

    const navLinks =
        document.querySelectorAll(
            "#sidemenu a[href^='#']"
        );

    const sections =
        document.querySelectorAll("[id]");


    window.addEventListener("scroll", () => {

        let current = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.clientHeight;


            if (
                window.pageYOffset >=
                sectionTop - 200
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active-nav");


            if (
                link.getAttribute("href").slice(1) === current
            ) {

                link.classList.add("active-nav");

            }

        });

    });

}

highlightActiveLink();


/* =====================================================
   TYPED HERO TITLE + DESCRIPTION
====================================================== */

/*
 * IMPORTANT:
 *
 * STEP 1:
 * Data Engineer
 *
 * STEP 2:
 * Azure Databricks Specialist
 *
 * STEP 3:
 * Description starts only AFTER the title sequence
 *
 * The description has its own slower typing speed.
 */


if (
    typeof Typed !== "undefined" &&
    document.querySelector(".auto-type")
) {

    const heroTitle =
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

                cursorChar: "|",

                onStringTyped: function () {

                    /*
                     * Description is intentionally
                     * handled separately below.
                     *
                     * This callback is kept here
                     * so the title animation remains
                     * independent and smooth.
                     */

                }

            }
        );

}


/* =====================================================
   HERO DESCRIPTION TYPING
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
   EMAILJS
====================================================== */

const contactForm =
    document.getElementById("contactForm");


const statusMessage =
    document.getElementById("statusMessage");


/*
 * Initialize EmailJS
 */

if (
    typeof emailjs !== "undefined"
) {

    emailjs.init({

        publicKey:
            "QFXGomMr5FbDoybBR"

    });

}


/* =====================================================
   SEND EMAIL
====================================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


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

                showStatus(
                    "Please fill in all fields.",
                    "error"
                );

                return;

            }


            showStatus(
                "Sending message...",
                "loading"
            );


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

                .then(
                    function (response) {

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
                )

                .catch(
                    function (error) {

                        console.error(
                            "EMAILJS ERROR:",
                            error
                        );


                        showStatus(
                            "Failed to send message. Please try again.",
                            "error"
                        );

                    }
                );

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
   ACTIVE NAVIGATION ON SCROLL
====================================================== */

const sections =
    document.querySelectorAll(
        "section[id], #home"
    );


const navLinks =
    document.querySelectorAll(
        "#sidemenu a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                        sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active-nav"
                );


                const href =
                    link.getAttribute("href");


                if (
                    href === `#${currentSection}`
                ) {

                    link.classList.add(
                        "active-nav"
                    );

                }

            }
        );

    }
);


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
