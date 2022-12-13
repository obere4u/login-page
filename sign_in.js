

// Validation of the sign-in section of the form

const username = document.getElementById('username');
const password = document.getElementById('password');
const usernameError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const submitBtn = document.querySelector('.login-btn');

//document.querySelector is used to pick out a CALSS secelctor
//document.getElementById is used to pick out an ID selector

username.addEventListener('keyup',() => {
    if (username.value ==''){
        usernameError.style.display = 'block';
    }
    else {
        usernameError.style.display = 'none';
    }
});

password.addEventListener('keyup',() => {
    if (password.value ==''){
        passwordError.style.display = 'block';
    }
    else {
        passwordError.style.display = 'none';
    }
});

submitBtn.addEventListener('click',()=>{
    if (username.value ==''){
        usernameError.style.display = 'block';
    }
    if (password.value ==''){
        passwordError.style.display = 'block';
    }
    else {
        passwordError.style.display = 'none';
        usernameError.style.display = 'none';
        let credentials = {
            userName: `${username.value}`,
            password: `${password.value}`
        }

        console.log(credentials);
    }
})