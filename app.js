/* =========================================================
   TAB SWITCHING
========================================================= */

const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabName) {

    // Remove active state from all tabs
    tabLinks.forEach((tab) => {
        tab.classList.remove("active-link");
    });

    // Hide all tab contents
    tabContents.forEach((content) => {
        content.classList.remove("active-tab");
    });

    // Show selected content
    const selectedContent =
        document.getElementById(tabName);

    if (selectedContent) {
        selectedContent.classList.add("active-tab");
    }

    // Activate selected tab
    const selectedTab =
        document.querySelector(
            `.tab-links[onclick="opentab('${tabName}')"]`
        );

    if (selectedTab) {
        selectedTab.classList.add("active-link");
    }
}


/* =========================================================
   SIDEBAR / MOBILE MENU
========================================================= */

const sideMenu =
    document.getElementById("sidemenu");


function openmenu() {

    if (sideMenu) {
        sideMenu.style.right = "0";
    }

}


function closemenu() {

    if (sideMenu) {
        sideMenu.style.right = "-250px";
    }

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A NAV LINK
========================================================= */

const navigationLinks =
    document.querySelectorAll("#sidemenu a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
            closemenu();
        }

    });

});


/* =========================================================
   RESUME
========================================================= */

const resumeURL =
    "https://drive.google.com/file/d/1jSyB3jhLuHW2nPoS-sqFdkkmDS4q_1UY/view?usp=sharing";


const resumeButton1 =
    document.getElementById("resume-button-1");


const resumeButton2 =
    document.getElementById("resume-button-2");


function openResume(event) {

    event.preventDefault();

    window.open(
        resumeURL,
        "_blank",
        "noopener,noreferrer"
    );

}


if (resumeButton1) {

    resumeButton1.addEventListener(
        "click",
        openResume
    );

}


if (resumeButton2) {

    resumeButton2.addEventListener(
        "click",
        openResume
    );

}


/* =========================================================
   EMAILJS CONTACT FORM
========================================================= */

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "QFXGomMr5FbDoybBR"
    });

}


const contactForm =
    document.getElementById("contactForm");


const statusMessage =
    document.getElementById("statusMessage");


/* =========================================================
   SEND EMAIL
========================================================= */

function sendEmail(event) {

    event.preventDefault();


    if (!contactForm) {
        return;
    }


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const message =
        document.getElementById("message").value.trim();



    /* ================= VALIDATION ================= */

    if (!name || !email || !message) {

        if (statusMessage) {

            statusMessage.textContent =
                "Please fill in all fields.";

            statusMessage.style.color =
                "#ff4d4d";

        }

        return;

    }



    /* ================= EMAIL VALIDATION ================= */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        if (statusMessage) {

            statusMessage.textContent =
                "Please enter a valid email address.";

            statusMessage.style.color =
                "#ff4d4d";

        }

        return;

    }



    /* ================= LOADING STATE ================= */

    if (statusMessage) {

        statusMessage.textContent =
            "Sending message...";

        statusMessage.style.color =
            "#aaaaaa";

    }



    /* ================= TEMPLATE PARAMETERS ================= */

    const templateParams = {

        from_name: name,

        from_email: email,

        message: message

    };



    /* ================= EMAILJS SEND ================= */

    emailjs
        .send(
            "service_qtbzwds",
            "template_p980pca",
            templateParams
        )

        .then((response) => {

            console.log(
                "SUCCESS!",
                response.status,
                response.text
            );


            if (statusMessage) {

                statusMessage.textContent =
                    "Message sent successfully!";

                statusMessage.style.color =
                    "#00c853";

            }


            contactForm.reset();

        })

        .catch((error) => {

            console.error(
                "EMAILJS ERROR:",
                error
            );


            if (statusMessage) {

                statusMessage.textContent =
                    "Failed to send message. Please try again.";

                statusMessage.style.color =
                    "#ff4d4d";

            }

        });

}


/* =========================================================
   CONTACT FORM EVENT
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        sendEmail
    );

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((anchor) => {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetID =
                this.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetID);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   REMOTE IMAGE FALLBACK
   Prevent broken images from looking ugly
========================================================= */

document
    .querySelectorAll(".project-image")
    .forEach((image) => {

        image.addEventListener(
            "error",
            function () {

                this.style.display =
                    "none";

                const wrapper =
                    this.parentElement;

                if (wrapper) {

                    wrapper.classList.add(
                        "image-fallback"
                    );

                }

            }
        );

    });


/* =========================================================
   LAZY IMAGE LOADING SUPPORT
========================================================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        if (!image.hasAttribute("loading")) {

            image.setAttribute(
                "loading",
                "lazy"
            );

        }

    });


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    new Date().getFullYear();


const footerYear =
    document.querySelector(
        ".footer-year"
    );


if (footerYear) {

    footerYear.textContent =
        currentYear;

}
