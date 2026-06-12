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