function printError(borderId, borderColor, errorId, msg) {
    document.getElementById(errorId).innerHTML = msg;
    document.getElementById(borderId).style.border = borderColor;
}

function placeholderError(elemId, placeholder) {
    document.getElementById(elemId).placeholder = placeholder;
}

function validateForm() {
    // Henter verdi fra formen
    var firstname = document.infoform.firstname.value;
    var lastname = document.infoform.lastname.value;
    var email = document.infoform.email.value;
    var password = document.infoform.password.value;


    var firstnameError = true;
    var lastnameError = true;
    var emailError = true;
    var passwordError = true;


    if(firstname === "") {
        printError("firstname", "1px solid red", "firstnameError", "Cannot be empty");
    }
    else {
            printError("firstname", "1px solid #ccc","firstnameError", "");
            firstnameError = false;
    }

    if(lastname === "") {
        printError("lastname", "1px solid red","lastnameError", "Cannot be empty");
    }
    else {
            printError("lastname", "1px solid #ccc","lastnameError", "");
            lastnameError = false;
    }


    if(email === "") {
        printError("email", "1px solid red","emailError", "Cannot be empty");
        placeholderError("email", "email@example.com");
    } else {
        var regex2 = /^\S+@\S+\.\S+$/;
        if(regex2.test(email) === false) {
            printError("email","emailError", "1px solid red","Please enter a valid email address");

        } else{
            printError("email","1px solid #ccc","emailError", "");
            emailError = false;
        }
    }

    if(password === "") {
        printError("password", "1px solid red","passwordError", "Cannot be empty");
    }
    else{
        printError("password", "1px solid #ccc","passwordError", "");
        passwordError = false;
    }

    // Forhindrer at formen blir submitta før alt er korrekt
    if((firstnameError || lastnameError || emailError || passwordError) === true) {
        return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + firstname + " " + lastname + "\n" +
            "Email Address: " + email + "\n";
        //en alert som viser hva som har blitt sendt
        alert(dataPreview);
    }
}
