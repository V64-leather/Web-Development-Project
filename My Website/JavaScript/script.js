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