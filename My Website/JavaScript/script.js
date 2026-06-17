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

        formMessage.textContent = "Thank you, " + firstName.value + ". Your message has been prepared successfully.";
        formMessage.style.color = "#1a6fb5";

                // The above code says everthing is fine if all the previous checks go through

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

window.location.href =
`mailto:support@stellar.co.za?subject=${subject}&body=${message}`;