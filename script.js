document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Get form inputs
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const degree = document.getElementById("degree").value;
    const major = document.getElementById("major").value;
    const organization = document.getElementById("organization").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const file = document.getElementById("upload-file").value;

    // Clear previous error messages
    document.getElementById("error1").textContent = "";
    document.getElementById("error2").textContent = "";
    document.getElementById("error3").textContent = "";
    document.getElementById("error4").textContent = "";
    document.getElementById("error5").textContent = "";
    document.getElementById("error6").textContent = "";
    document.getElementById("error7").textContent = "";
    document.getElementById("error8").textContent = "";
    document.getElementById("error9").textContent = "";
    document.getElementById("file-error").textContent = "";

    // Validate First Name
    if (!nameRegex.test(fname)) {
        document.getElementById("error1").textContent = "Please enter a valid first name.";
        valid = false;
    }

    // Validate Last Name
    if (!nameRegex.test(lname)) {
        document.getElementById("error2").textContent = "Please enter a valid last name.";
        valid = false;
    }

    // Validate Phone Number
    if (!phoneRegex.test(phone)) {
        document.getElementById("error3").textContent = "Please enter a valid 10-digit phone number.";
        valid = false;
    }

    // Validate Degree Selection
    if (degree === "") {
        document.getElementById("error4").textContent = "Please select your degree.";
        valid = false;
    }

    // Validate Major Selection
    if (major === "") {
        document.getElementById("error5").textContent = "Please select your major.";
        valid = false;
    }

    // Validate Organization
    if (organization === "") {
        document.getElementById("error6").textContent = "Please enter your organization.";
        valid = false;
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        document.getElementById("error7").textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Validate Password
    if (!passwordRegex.test(password)) {
        document.getElementById("error8").textContent = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";
        valid = false;
    }

    // Validate Confirm Password
    if (password !== cpassword) {
        document.getElementById("error9").textContent = "Passwords do not match.";
        valid = false;
    }

    // Validate File Upload
    if (file === "") {
        document.getElementById("file-error").textContent = "Please upload a file.";
        valid = false;
    }

    // If all validations pass, you can proceed with form submission
    if (valid) {
        alert("Form submitted successfully!");
        // You can submit the form here or make an AJAX call
    }
});

// Password strength indicator
function trigger() {
    const password = document.getElementById("password").value;
    const strength = document.querySelector('.strength');
    const weak = /[a-z]/;
    const medium = /\d+/;
    const strong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if (password.length >= 6 && password.match(weak) && password.match(medium) && password.match(strong)) {
        strength.style.backgroundColor = 'green';
    } else if (password.length >= 6 && (password.match(weak) || password.match(medium) || password.match(strong))) {
        strength.style.backgroundColor = 'orange';
    } else {
        strength.style.backgroundColor = 'red';
    }
}
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Perform form validation here if needed

    // Display a success message after form submission
    alert("Successfully registered for the event! Check your email for further details.");
    
    // Optionally, clear the form fields after submission
    this.reset();
});

