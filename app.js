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


    /* Hide all tab contents */

    contents.forEach((content) => {

        content.classList.remove("active-tab");

    });


    /* Remove active state from all tabs */

    tabs.forEach((tab) => {

        tab.classList.remove("active-link");

    });


    /* Show selected tab */

    const selectedContent =
        document.getElementById(tabName);

    if (selectedContent) {

        selectedContent.classList.add("active-tab");

    }


    /* Activate selected tab */

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
             *
             * No Google Drive redirect required.
             */

        }
    );

});


/* =====================================================
   TYPED HERO TEXT
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
                "Azure Databricks Engineer",
                "PySpark & SQL Developer",
                "Cloud Data Engineering Professional"

            ],

            typeSpeed: 55,

            backSpeed: 35,

            backDelay: 1600,

            loop: true

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
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


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

                from_name: name,

                from_email: email,

                message: message

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

/*
 * Local assets are used instead of API images.
 *
 * If an optional image is missing, hide only that
 * image instead of displaying a broken-image icon.
 */

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
