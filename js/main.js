// Query Selector
const registerForm = document.getElementById("register-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Show Input Error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.parentElement.className = "user-input error";
    const small = formControl.parentElement.querySelector("small");
    small.innerText = message;
}

// Show Input Success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.parentElement.className = "user-input success";
}

// Check Email Is Valid
function validEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
registerForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(username.value === ""){
        showError(username, "Username is required");
    }else{
        showSuccess(username);
    }

    if(email.value === ""){
        showError(email, "Email is required");
    }else if(!validEmail(email.value)){
        showError(email,"Email is not valid")
    }
    else{
        showSuccess(email);
    }

    if(password.value === ""){
        showError(password, "Password is required");
    }else{
        showSuccess(password);
    }

    if(confirmPassword.value === ""){
        showError(confirmPassword, "Confirm password is required");
    }else{
        showSuccess(confirmPassword);
    }
});