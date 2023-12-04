function DisplayMSG() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    if (firstName === '' || lastName === '') 
    {
        alert('Please enter your information.');
    } 
    else 
    {
        const fullName = `${firstName} ${lastName}`;
        alert(`Thank you ${firstName} ${lastName}. We have received your message.`);
    }
}

function validateFirstName() {
    var firstName = document.getElementById('firstName').value;
    var errorMessage = document.getElementById('firstNameError');
    var minLength = 3; 
    if (!/[A-Z]/.test(firstName) || firstName.length < minLength) {
        errorMessage.textContent = "First Name must have at least 3 characters and include an uppercase letter.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
}



function validateLastName() {
    var lastName = document.getElementById('lastName').value;
    var errorMessage = document.getElementById('lastNameError');
    var alphabeticPattern = /^[A-Za-z]+$/;

    if (!alphabeticPattern.test(lastName) && lastName.length > 0) {
        errorMessage.textContent = "Last Name must contain only alphabetic characters.";
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
}
}

function validatePostalCode() {
    var postalCode = document.getElementById('postalCode').value;
    var errorMessage = document.getElementById('postalCodeError');
    var postalCodePattern = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;

    if (!postalCodePattern.test(postalCode) && postalCode.length > 0) {
        errorMessage.textContent = "Postal Code must be in the format a0a0a0.";
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
}

function validateProvince() {
    var province = document.getElementById('province').value.toUpperCase();
    var errorMessage = document.getElementById('provinceError');
    var allowedProvinces = ['QC', 'ON', 'MN', 'SK', 'AB', 'BC'];

    if (!allowedProvinces.includes(province) && province.length > 0) {
        errorMessage.textContent = "Province must be one of QC, ON, MN, SK, AB, BC.";
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
}

function validateAge() {
    var age = document.getElementById('age').value;
    var errorMessage = document.getElementById('ageError');

    if (age < 18 && age.length > 0) {
        errorMessage.textContent = "You must be at least 18 years old.";
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('passwordError');
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordPattern.test(password) && password.length > 0) {
        errorMessage.textContent = "Password must have at least 6 characters, including one digit and one upper-case character.";
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
}

function validateConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm').value;
    var errorMessage = document.getElementById('confirmError');

    if (password !== confirmPassword && confirmPassword.length > 0) {
        errorMessage.textContent = "Confirm Password does not match the Password.";
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('emailError');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email) && email.length > 0) {
        errorMessage.textContent = "Email must contain an '@' and a '.' character.";
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
}


function validateForm() {
    
    validateFirstName();
    validateLastName();
    validatePostalCode();
    validateProvince();
    validateAge();
    validatePassword();
    validateConfirmPassword();
    validateEmail();

    var errorElements = document.querySelectorAll('.errorMessage');
    var hasErrors = false;
    errorElements.forEach(function (element) {
        if (element.style.display === 'block') {
            hasErrors = true;
            return;
        }
    });

    if (!hasErrors) {
        alert("Thanks for registering with our website, your customer record was created successfully.");
    }
    return !hasErrors;
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('postalCode').value = '';
    document.getElementById('province').value = '';
    document.getElementById('age').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm').value = '';
    document.getElementById('email').value = '';

    var errorElements = document.querySelectorAll('.errorMessage');
    errorElements.forEach(function (element) {
        element.textContent = '';
        element.style.display = 'none';
    });
}

document.getElementById('clearButton').addEventListener('click', clearForm);















