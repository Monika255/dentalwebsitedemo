// SMILECARE DENTAL CLINIC

document.addEventListener("DOMContentLoaded", function () {

    // WhatsApp Button
    const whatsappButton = document.querySelector(".whatsapp-btn");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", function (event) {

            event.preventDefault();

            const phoneNumber = "919876543210";

            const message =
                "Hello! I would like to book a dental appointment.";

            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");
        });
    }


    // Navigation Links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });


    // Book Appointment Button
    const appointmentButton =
        document.querySelector(".primary-btn[href='#contact']");

    if (appointmentButton) {

        appointmentButton.addEventListener("click", function (event) {

            event.preventDefault();

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // Current Year
    const footer = document.querySelector("footer p");

    if (footer) {

        const currentYear = new Date().getFullYear();

        footer.innerHTML =
            `© ${currentYear} SmileCare Dental Clinic. All Rights Reserved.`;
    }

});