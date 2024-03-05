function sendData(event) {
    // Prevent form submission
    event.preventDefault();

    // Retrieve form field values
    var name = document.getElementById("txtname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if all required fields are filled out
    if (name && email && subject && message) {
        // Store values in localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("subject", subject);
        localStorage.setItem("message", message);

        // Display "Thank you" message
        document.getElementById("div1").innerHTML = "<h4 style='border:2px solid lightseagreen; padding:15px; text-align:center; margin:30px; color: black; background-color:lightgreen; font-size: 15px;'>Thank you for your message. It has been sent.</h4>";
    } else {
        // Display "Error" message
        document.getElementById("div1").innerHTML = "<h4 style='border:2px solid lightseagreen; text-align:center; margin:30px; padding: 15px; color: black; background: red; font-size: 15px; '>One or more fields have an error. Please check and try again.</h4>";
    }

    document.getElementById('txtname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
}