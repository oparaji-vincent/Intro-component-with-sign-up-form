// Buttons, Forms, input tags
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

// error selectors
const inputImage1 = document.querySelector('.inputImage1')
const inputImage2 = document.querySelector('.inputImage2')
const inputImage3 = document.querySelector('.inputImage3')
const inputImage4 = document.querySelector('.inputImage4')
const errorText1 = document.querySelector('.error-text1')
const errorText2 = document.querySelector('.error-text2')
const errorText3 = document.querySelector('.error-text3')
const errorText4 = document.querySelector('.error-text4')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // errorText1.classList.remove('hide');
    // errorText2.classList.remove('hide');
    // errorText3.classList.remove('hide');
    // errorText4.classList.remove('hide');
    // inputImage1.classList.remove('hide');
    // inputImage2.classList.remove('hide');
    // inputImage3.classList.remove('hide');
    // inputImage4.classList.remove('hide');
    // fname.style.borderColor = "hsl(0, 100%, 74%)"
    // lname.style.borderColor = "hsl(0, 100%, 74%)"
    // email.style.borderColor = "hsl(0, 100%, 74%)"
    // pass.style.borderColor = "hsl(0, 100%, 74%)"
     const fnameValue = fname.value.trim();
     const lnameValue = lname.value.trim();
     const emailValue = email.value.trim();
     const passValue = pass.value.trim();

    const checkFirstName = (value) => {
        if(value === '' || value === null){
            errorText1.classList.remove('hide');
            inputImage1.classList.remove('hide');
            fname.style.borderColor = "hsl(0, 100%, 74%)"
        }
        else{
            errorText1.classList.add('hide');
            inputImage1.classList.add('hide');
            fname.style.borderColor = "hsl(0, 0%, 59%)";
        }
    }
    const checkLastName = (value) => {
        if(value === '' || value === null){
            errorText2.classList.remove('hide');
            inputImage2.classList.remove('hide');
            lname.style.borderColor = "hsl(0, 100%, 74%)"
        }
        else{
            errorText2.classList.add('hide');
            inputImage2.classList.add('hide');
            lname.style.borderColor = "hsl(0, 0%, 59%)";
        }
    }
    const checkEmail = (value) => {
        if(value === '' || value === null){
            errorText3.classList.remove('hide');
            inputImage3.classList.remove('hide');
            email.style.borderColor = "hsl(0, 100%, 74%)"
        }
        else if(!validEmail(value)){
            errorText3.classList.remove('hide');
            inputImage3.classList.remove('hide');
            email.style.borderColor = "hsl(0, 100%, 74%)"
        }
        else{
            errorText3.classList.add('hide');
            inputImage3.classList.add('hide');
            email.style.borderColor = "hsl(0, 0%, 59%)";
        }
    }
    const checkPassword = (value) => {
        if(value === '' || value === null){
            errorText4.classList.remove('hide');
            inputImage4.classList.remove('hide');
            pass.style.borderColor = "hsl(0, 100%, 74%)";
        }
        else{
            errorText4.classList.add('hide');
            inputImage4.classList.add('hide');
            pass.style.borderColor = "hsl(0, 0%, 59%)";
        }
    }

        function validEmail(emailValue){
            const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validEmail.test(emailValue);
        }
    
        
        checkFirstName(fnameValue);
        checkLastName(lnameValue);
        checkEmail(emailValue);
        checkPassword(passValue);
})