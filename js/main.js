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
function validEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) return showSuccess(input);
    return showError(input,"Email is not valid");
}

// Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value === "") return showError(input, `${input.id} is required`);
        return showSuccess(input);
    });
}

// Check length input
function checkLength(input, min, max){
    if(input.value.length < min) return showError(input, `${input.id} must be at least ${min} characters`);
    if(input.value.length > max) return showError(input, `${input.id} must be less than ${max} characters`);
    return showSuccess(input);
}

// Check Password Match
function checkPasswordsMatch(password,confirm){
    if(password.value !== confirm.value) return showError(confirm, "Password is not matched");
}

// Event Listeners
registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    checkRequired([username,email,password,confirmPassword]);
    checkLength(username,3,15);
    checkLength(password,8,20);
    validEmail(email);
    checkPasswordsMatch(password,confirmPassword);
});
