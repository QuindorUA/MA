let submButton = document.getElementById("submitRegistration");
submButton.onclick = function () {
    //Validation logic will be here
    let emailAdd = document.getElementById("email");
    validateEmail(emailAdd);
    let usernameAdd = document.getElementById("username");
    validateUsername(usernameAdd);
    let passwordAdd = document.getElementById("password");
    validatePassword(passwordAdd);
    let passwordConfirmAdd = document.getElementById("passwordConfirm");
    validatePasswordConfirm(passwordConfirmAdd);

};

function validateEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let result = emailPattern.test(email.value);
    console.dir(result);
    if(result===true){
        email.style.border = "2px solid green";
    }else{
        email.style.border = "2px solid red";
    }
}

function validateUsername(username) {
    let usernamePattern = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    let result = usernamePattern.test(username.value);
    console.dir(result);
    if(result===true){
        username.style.border = "2px solid green";
    }else{
        username.style.border = "2px solid red";
    }
}

function validatePassword(password) {
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let result = passwordPattern.test(password.value);
    console.dir(result);
    if(result===true){
        password.style.border = "2px solid green";
    }else{
        password.style.border = "2px solid red";
    }
}

function validatePasswordConfirm(passwordConfirm) {
    if(passwordConfirm.value!=""){
        if(passwordConfirm.value == document.getElementById("password").value){
            passwordConfirm.style.border = "2px solid green";
        }else{
            passwordConfirm.style.border = "2px solid red";
        }
    }else{
        passwordConfirm.style.border = "2px solid red";
    }
}
