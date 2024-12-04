document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("sign-in-form");

    const fields = {
        fname: {
            input: document.querySelector(".fname"),
            error: document.querySelector(".fname-field .error"),
            validate: (value) => value.trim() !== "",
        },
        lname: {
            input: document.querySelector(".lname"),
            error: document.querySelector(".lname-field .error"),
            validate: (value) => value.trim() !== "",
        },
        city: {
            input: document.querySelector(".city"),
            error: document.querySelector(".city-field .error"),
            validate: (value) => value.trim() !== "",
        },
        institution: {
            input: document.querySelector(".institution"),
            error: document.querySelector(".institution-field .error"),
            validate: (value) => value.trim() !== "",
        },
        email: {
            input: document.querySelector(".email"),
            error: document.querySelector(".email-field .error"),
            validate: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()), // Custom regex for email validation
        },
        phone: {
            input: document.querySelector(".phone"),
            error: document.querySelector(".phone-field .error"),
            validate: (value) => /^\d{12}$/.test(value.trim()), // Validate exactly 12 digits
        },
        password: {
            input: document.querySelector(".password"),
            error: document.querySelector(".field .error.password"),
            validate: (value) => value.trim() !== "" && value.trim().length >= 8,
        },
    };

    // Restrict phone input to numbers only
    fields.phone.input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    });

    const togglePasswordIcon = document.getElementById("toggle-password");
    togglePasswordIcon.addEventListener("click", () => {
        const passwordField = fields.password.input;
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePasswordIcon.src = "ICON/show.svg"; // Change to the "show" icon
        } else {
            passwordField.type = "password";
            togglePasswordIcon.src = "ICON/hide.svg"; // Change back to "hide" icon
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;

        // Validate each field
        for (const key in fields) {
            const field = fields[key];
            const value = field.input.value;

            if (!field.validate(value)) {
                field.error.style.display = "flex"; // Show error message
                isValid = false;
            } else {
                field.error.style.display = "none"; // Hide error message
            }
        }

        if (isValid) {
            window.location.href = "whatsapp.html";
        }
    });
});