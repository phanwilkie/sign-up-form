const password = document.querySelector("#password");
const passwordConf = document.querySelector("#conf_password");
let errorMessagePwd = document.querySelector("#err_pwd");
const btnSubmit = document.querySelector('#btnSubmit');

//one of the fields are null
function submitForm() {
    if (password.value === '' || passwordConf.value === '') {
        errorMessagePwd.textContent = 'PASSWORD CANNOT BE EMPTY';
        event.preventDefault();
    }
    else if (password.value !== passwordConf.value) {
        errorMessagePwd.textContent = 'PASSWORD DO NOT MATCH';
        event.preventDefault();
    }
    else {
        alert("Form successfully submitted!");
    }
}

btnSubmit.addEventListener('click', function() {
    submitForm();
})