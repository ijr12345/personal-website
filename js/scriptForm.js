function validateForm() {

    if (document.forms[0].name.value == "") {
        alert("Name must not be empty");
        document.forms[0].name.style.border = "1px solid red";
        return false;
        // must return 'onsubmit' in the html to prevent form from auto submitting
    } 
    if (document.forms[0].email.value == "") {
        alert("Email must not be empty");
        document.forms[0].email.style.border = "1px solid red";
        return false;
    }
    if (document.forms[0].comment.value == "") {
        alert("Comment section must not be empty");
        document.forms[0].comment.style.border = "1px solid red";
        return false;
    }

    else {
        alert("Message sent!");
        return true;
        // will submit the form 
    }
    
}
