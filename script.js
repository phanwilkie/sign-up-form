const firstName = document.querySelector("#first_name"); 
const errorFirstName = document.querySelector("#err_first_name");
const lastName = document.querySelector("#last_name");
const errorLastName = document.querySelector("#err_last_name");
const email = document.querySelector("#email");
const errorEmail = document.querySelector("#err_email");
const password = document.querySelector("#password");
const passwordConf = document.querySelector("#conf_password");
const errorMessagePwd = document.querySelector("#err_pwd");
const btnSubmit = document.querySelector('#btnSubmit');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


//one of the fields are null
function submitForm() {
    if (firstName.value === '') {
        errorFirstName.textContent = 'FIRST NAME CANNOT BE EMPTY';
        errorFirstName.style.backgroundColor = 'red';
        errorFirstName.style.color = 'white';
        event.preventDefault();
    } 
    else if (lastName.value === '') {
        errorLastName.textContent = 'LAST NAME CANNOT BE EMPTY';
        errorLastName.style.backgroundColor = 'red';
        errorLastName.style.color = 'white';
        event.preventDefault();
    }
    else if (email.value === '') {
        errorEmail.textContent = 'YOU MUST ENTER AN EMAIL ADDRESS';
        errorEmail.style.backgroundColor = 'red';
        errorEmail.style.color = 'white';
        event.preventDefault();
    }
    else if (emailRegex.test(email.value) === false) {
        errorEmail.textContent = 'INVALID EMAIL ADDRESS';
        errorEmail.style.backgroundColor = 'red';
        errorEmail.style.color = 'white';
        event.preventDefault();
    }
    else if (password.value === '' || passwordConf.value === '') {
        errorMessagePwd.textContent = 'PASSWORD CANNOT BE EMPTY';
        errorMessagePwd.style.backgroundColor = 'red';
        errorMessagePwd.style.color = 'white';
        event.preventDefault();
    }
    else if (password.value !== passwordConf.value) {
        errorMessagePwd.textContent = 'PASSWORD DO NOT MATCH';
        errorMessagePwd.style.backgroundColor = 'red';
        errorMessagePwd.style.color = 'white';
        event.preventDefault();
    }
    else {
        alert("Form successfully submitted!");
    }
}

btnSubmit.addEventListener('click', function() {
    submitForm();
})

//To do - fix email validation to work with passw validation