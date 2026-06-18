// CONTACT FORM VALIDATION

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

                // The above says find the contact and when the submit button is clicked then run this code

        event.preventDefault();

                // The little snippet of code above prevents the page from refreshing every time the form is submitted

        const firstName = document.querySelector("#contactFirstName");
        const lastName = document.querySelector("#contactLastName");
        const email = document.querySelector("#contactEmail");
        const message = document.querySelector("#contactMessage");
        const formMessage = document.querySelector(".form-message");

                // The code above fetches all the info typed in by the user in each of the boxes

        if (
            firstName.value.trim() === "" ||
            lastName.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""

                // The above code checks if any of the boxes are empty

        ) {
            formMessage.textContent = "Please complete all fields before submitting.";
            formMessage.style.color = "red";
            return;
        }

                //The above code stops the form if any of the boxes are empty to prevent incomplete submissions

        if (!email.value.includes("@")) {

                // the above code checks if the email includes the @

            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

                // The above code stops the form if @ symbol is not present in the email

            formMessage.textContent = "Preparing your email...";
            formMessage.style.color = "#1a6fb5";

            const subject = "STELLAR Contact Form Submission";

            const emailBody =
            "Name: " + firstName.value + " " + lastName.value +
            "\nEmail: " + email.value +
            "\n\nMessage:\n" + message.value;

            window.location.href =
            "mailto:terrain974@gmail.com?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(emailBody);

            contactForm.reset();
    });
}

                // The above code clears form for a new start


// ENQUIRY FORM VALIDATION

const enquiryForm = document.querySelector(".enquiry-form");

                // The above code finds the enquiiry form and saves it so JavaScript can work

if (enquiryForm) {

                // The above code says to only run the JavaScript code if the user is currently on the enquiry page

    enquiryForm.addEventListener("submit", function(event) {

                // The above code runs the code when the submit button is clicked

        event.preventDefault();

                // The above code prevents the page from refreshing before the user sees the validation message

        const enquiryType = document.querySelector("#enquiryType");
        const firstName = document.querySelector("#enquiryFirstName");
        const lastName = document.querySelector("#enquiryLastName");
        const email = document.querySelector("#enquiryEmail");
        const message = document.querySelector("#enquiryMessage");
        const enquiryMessage = document.querySelector(".enquiry-message");

                // The above code finds all the pieces of information the user entered and area where the feedback will be displayed

        if (
            enquiryType.value.trim() === "" ||
            firstName.value.trim() === "" ||
            lastName.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

                // The above code says if any field has been left blank then do not continue

            enquiryMessage.textContent = "Please complete all fields before submitting your enquiry.";
            enquiryMessage.style.color = "red";
            return;
        }

                //The above code tells the user to complete all fields and stops the submission process

        if (!email.value.includes("@")) {

                // The above code says the email is invalid if it does not contain an @ symbol

            enquiryMessage.textContent = "Please enter a valid email address.";
            enquiryMessage.style.color = "red";
            return;
        }

        enquiryMessage.textContent = "Thank you, " + firstName.value + ". Your " + enquiryType.value + " enquiry has been received.";
        enquiryMessage.style.color = "#1a6fb5";
        const subject = "STELLAR Enquiry Form Submission";

        const emailBody =
        "Enquiry Type: " + enquiryType.value +
        "\nName: " + firstName.value + " " + lastName.value +
        "\nEmail: " + email.value +
        "\n\nMessage:\n" + message.value;

        window.location.href =
        "mailto:terrain974@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(emailBody);

        enquiryForm.reset();
    });
}

// PRODUCTS PAGE SEARCH AND FILTER

const searchInput = document.querySelector(".search-bar input");
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll("#games-container .game-card");

if (searchInput) {
    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        productCards.forEach(function(card) {
            const gameTitle = card.querySelector("h3").textContent.toLowerCase();

            if (gameTitle.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// PRODUCT CATEGORY FILTER

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedCategory = button.textContent.toLowerCase();

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        productCards.forEach(function(card) {
            const cardCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// SAVE GAME BUTTONS

const saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.textContent === "Saved") {
            button.textContent = "🔖";
            button.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        } else {
            button.textContent = "Saved";
            button.style.backgroundColor = "#e05c2a";
        }
    });
});

// Enhancing the FAQ section

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {
    item.addEventListener("toggle", function() {
        if (item.open) {
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.open = false;
                }
            });
        }
    });
});

// GRID AND LIST VIEW TOGGLE

const gridViewButton = document.querySelector("#grid-view");
const listViewButton = document.querySelector("#list-view");
const gamesContainer = document.querySelector("#games-container");

if (gridViewButton && listViewButton && gamesContainer) {
    listViewButton.addEventListener("click", function() {
        gamesContainer.classList.add("list-view");

        listViewButton.classList.add("active");
        gridViewButton.classList.remove("active");
    });

    gridViewButton.addEventListener("click", function() {
        gamesContainer.classList.remove("list-view");

        gridViewButton.classList.add("active");
        listViewButton.classList.remove("active");
    });
}



const gameDescriptions = {

    "Hollow Knight":
    "Hollow Knight is a 2017 Metroidvania video game developed and published by Team Cherry. Players explore the vast underground kingdom of Hallownest, battling enemies, discovering secrets, and unlocking powerful abilities.",

    "Hades 1":
    "Hades is a roguelike action role-playing game developed by Supergiant Games. Players control Zagreus, son of Hades, as he attempts to escape the Underworld while growing stronger after every attempt.",

    "Schedule 1":
    "Schedule I is an open-world crime simulator where players build criminal enterprises, manage resources, and expand their influence throughout the game world.",

    "Batman: Arkham City":
    "Batman: Arkham City expands upon Arkham Asylum by allowing players to explore a massive prison district within Gotham City while battling iconic villains.",

    "Tomb Raider":
    "Tomb Raider follows Lara Croft's transformation from an inexperienced explorer into a hardened survivor after becoming stranded on a mysterious island.",

    "LA Noire":
    "L.A. Noire is a detective thriller set in 1940s Los Angeles. Players investigate crimes, interrogate suspects, and solve complex cases as detective Cole Phelps.",

    "Lethal Company":
    "Lethal Company is a cooperative horror game where players collect scrap from abandoned facilities while surviving dangerous creatures and environmental hazards.",

    "Peak":
    "Peak is a cooperative mountain-climbing adventure where players work together to overcome obstacles and reach the summit.",

    "RV There Yet":
    "RV There Yet is a cooperative road-trip adventure game where players travel across unique locations while completing objectives and managing resources."

};

// READ MORE LIGHTBOX

const modal = document.querySelector("#gameModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const closeModal = document.querySelector(".close-modal");

const readMoreButtons = document.querySelectorAll(".btn-read-more");

readMoreButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".game-card");

        const gameTitle = card.querySelector("h4").textContent;

        modalTitle.textContent = gameTitle;

        modalDescription.textContent =
            gameDescriptions[gameTitle];

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click", function() {

    modal.style.display = "none";

});

window.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});

console.log(modal);
console.log(readMoreButtons);