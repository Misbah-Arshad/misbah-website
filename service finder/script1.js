document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("booking-name").value;
        const email = document.getElementById("booking-email").value;
        const serviceType = document.getElementById("booking-service").value;
        const date = document.getElementById("booking-date").value;

        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = `Thank you, ${name}! Your booking for a ${serviceType} on ${date} has been received. A confirmation email will be sent to ${email}.`;

        bookingForm.reset();
    });

    const reviewForm = document.getElementById("review-form");

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const reviewerName = document.getElementById("name").value;
        const reviewText = document.getElementById("review").value;
        const rating = document.getElementById("rating").value;

        const reviewsContainer = document.querySelector(".reviews-container");
        const newReview = document.createElement("div");
        newReview.classList.add("review");

        newReview.innerHTML = `
            <h3>${reviewerName}</h3>
            <p>${reviewText}</p>
            <span>Rating: ${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>
        `;

        reviewsContainer.appendChild(newReview);

        reviewForm.reset();
        alert("Thank you for your review!");
    });

    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach((faq) => {
        faq.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === "block";
            answer.style.display = isVisible ? "none" : "block";
        });
    });

    const contactButton = document.getElementById("contact-us-btn");
    const contactForm = document.getElementById("contact-form");

    contactButton.addEventListener("click", function () {
        contactForm.style.display = contactForm.style.display === "none" || contactForm.style.display === "" ? "block" : "none";
    });

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const contactName = document.getElementById("contact-name").value;
        const contactEmail = document.getElementById("contact-email").value;
        const contactMessage = document.getElementById("contact-message").value;

        alert(`Thank you, ${contactName}! We have received your message and will get back to you at ${contactEmail} soon.`);

        contactForm.reset();
    });

    document.addEventListener("DOMContentLoaded", function () {
        const bookingForm = document.getElementById("booking-form");
        const confirmationMessage = document.getElementById("confirmation-message");

        if (bookingForm) {
            bookingForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const name = document.getElementById("booking-name").value;
                const email = document.getElementById("booking-email").value;
                const serviceType = document.getElementById("booking-service").value;
                const date = document.getElementById("booking-date").value;

                if (confirmationMessage) {
                    confirmationMessage.style.display = "block";
                    confirmationMessage.textContent = `Thank you, ${name}! Your booking for a ${serviceType} on ${date} has been received. A confirmation email will be sent to ${email}.`;
                } else {
                    alert(`Thank you, ${name}! Your booking for a ${serviceType} on ${date} has been received. A confirmation email will be sent to ${email}.`);
                }

                bookingForm.reset();
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const reviewForm = document.getElementById("review-form");

        reviewForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const reviewerName = document.getElementById("name").value;
            const reviewText = document.getElementById("review").value;
            const rating = document.getElementById("rating").value;

            if (!reviewerName || !reviewText || !rating) {
                alert("Please fill out all fields.");
                return;
            }

            const reviewsContainer = document.querySelector(".reviews-container");
            const newReview = document.createElement("div");
            newReview.classList.add("review");

            newReview.innerHTML = `
                <h3>${reviewerName}</h3>
                <p>${reviewText}</p>
                <span>Rating: ${"★".repeat(Number(rating))}${"☆".repeat(5 - Number(rating))}</span>
            `;

            reviewsContainer.appendChild(newReview);

            setTimeout(function() {
                alert("Thank you for your review!");
            }, 100);

            reviewForm.reset();
        });
    });
   
});
   