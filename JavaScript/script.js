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
        ) {
            formMessage.textContent = "Please complete all fields before submitting.";
            formMessage.style.color = "red";
            return;
        }

        // The above code stops the form if any of the boxes are empty to prevent incomplete submissions

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

// The above code finds the enquiry form and saves it so JavaScript can work

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

        // The above code tells the user to complete all fields and stops the submission process

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


// ENHANCING THE FAQ SECTION

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


// HOMEPAGE LIGHTBOX DESCRIPTIONS

const gameDescriptions = {

    "Hollow Knight":
    "Forge your own path through the ruined kingdom of Hallownest, a vast underground world filled with forgotten civilizations, powerful enemies and hidden secrets. Explore twisting caverns, acquire new abilities, challenge dangerous bosses and uncover the mysteries surrounding the fallen kingdom in this beautifully hand-drawn Metroidvania adventure.",

    "Hades 1":
    "Battle your way out of the Underworld as Zagreus, the immortal son of Hades. Wield legendary weapons, receive powerful blessings from the gods of Olympus and grow stronger with every escape attempt. Featuring fast-paced combat, memorable characters and a rich narrative that unfolds over multiple runs.",

    "Schedule 1":
    "Build a criminal empire from the ground up in the city of Hyland Point. Manufacture products, manage resources, recruit employees, purchase properties and expand your influence throughout the city. Every decision shapes your rise from a small-time operator into one of the most powerful figures in the underground economy.",

    "Batman: Arkham City":
    "Become the Dark Knight and explore the dangerous prison district known as Arkham City. Face iconic villains including The Joker, Two-Face and The Penguin while uncovering a conspiracy that threatens Gotham. Use Batman's gadgets, combat skills and detective abilities to restore justice to the city.",

    "Tomb Raider":
    "Experience Lara Croft's origin story as she transforms from an inexperienced archaeologist into a hardened survivor. Stranded on a mysterious island after a shipwreck, Lara must hunt, fight and solve ancient mysteries while confronting a dangerous cult and uncovering the island's dark secrets.",

    "LA Noire":
    "Investigate murders, conspiracies and corruption as detective Cole Phelps in a detailed recreation of 1940s Los Angeles. Gather evidence, interrogate suspects and solve challenging cases using observation and deduction. Every choice you make can influence the outcome of investigations and your reputation within the LAPD.",

    "Lethal Company":
    "Work together with friends to collect valuable scrap from abandoned industrial moons while surviving terrifying creatures and environmental hazards. Cooperation, communication and careful planning are essential as you attempt to meet your profit quota and avoid becoming another casualty of the Company's dangerous assignments.",

    "Peak":
    "Climb a dangerous mountain alone or with friends where every decision could mean success or disaster. Manage limited resources, overcome environmental obstacles and help your teammates survive the journey. The higher you climb, the more challenging the terrain becomes, testing both skill and teamwork.",

    "RV There Yet":
    "Embark on a chaotic road-trip adventure where teamwork, communication and quick thinking are the keys to success. Travel through unique locations, complete objectives, overcome unexpected challenges and work together to guide your recreational vehicle safely home. Every journey creates new stories and memorable moments."

};


// READ MORE LIGHTBOX

const modal = document.querySelector("#gameModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const closeModal = document.querySelector(".close-modal");

const readMoreButtons = document.querySelectorAll(".btn-read-more");

if (modal && modalTitle && modalDescription && closeModal) {
    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const card = button.closest(".game-card");
            const gameTitle = card.querySelector("h4").textContent;

            modalTitle.textContent = gameTitle;
            modalDescription.textContent = gameDescriptions[gameTitle];
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
}


// BUY NOW BUTTON ON GAME PAGES

const buyButtons = document.querySelectorAll(".btn-buy");

buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const gameTitle = document.querySelector(".game-details h1").textContent;
        const gamePrice = document.querySelector(".game-price").textContent;

        alert(gameTitle + " has been added to your cart.\nPrice: " + gamePrice);
    });
});