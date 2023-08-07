const rangeInput = document.getElementById('hourly-rate');
const rangeValue = document.getElementById('range-value');

rangeInput.addEventListener('input', function() {
    rangeValue.textContent = this.value;
});

function validateForm() {
    var form = document.getElementById('myForm');
    var fullName = form.FullName.value;
    var email = form.email.value;
    var password = form.password.value;
    var rePassword = form.rePassword.value;
    var exp = form.experience.value;
    var dev = form.devType.value;
    var langsAll = [];
    var langs = form.elements['languages'];

    for (var i = 0; i < langs.length; i++) {
        if (langs[i].checked) {
            langsAll.push(langs[i].value);
        }
    }

    if (langsAll.length === 0) {
        alert("Please select at least one language.");
        return false;
    }

    // Validate username
    if (fullName.length < 3 || !/^[a-zA-Z]+$/.test(fullName)) {
        alert('Name should contain only letters and be at least 3 characters long.');
        form.FullName.focus();
        return false;
    }

    // Validate email
    var atCount = email.split('@').length - 1;
    var dotCount = email.split('.').length - 1;
    if (atCount !== 1 || dotCount !== 1) {
        alert('Invalid email format.');
        form.email.focus();
        return false;
    }

    // Validate password
    if (password.length < 12) {
        alert('Password should be at least 12 characters long.');
        form.password.focus();
        return false;
    }
    var hasUpperCase = false;
    var hasLowerCase = false;
    var hasSymbol = false;
    for (var i = 0; i < password.length; i++) {
        var char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char === '!' || char === '@' || char === '#' || char === '$' || char === '%' || char === '^' || char === '&') {
            hasSymbol = true;
        }
    }
    if (!(hasUpperCase && hasLowerCase && hasSymbol)) {
        alert('Password should contain at least one uppercase letter, one lowercase letter, and one symbol.');
        form.password.focus();
        return false;
    }

    // Validate re-entered password
    if (password !== rePassword) {
        alert('Passwords do not match.');
        form.rePassword.focus();
        return false;
    }

    // Show success message with entered values
    var resultDiv = document.querySelector('.validationResult');
    resultDiv.innerHTML = `<h2>Form has been validated</h2>
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Years of Experience: ${exp}</p>
        <p>Languages: ${langsAll.join(', ')}</p>
        <p>Preferred Development Type: ${dev}</p>
        <p>Hourly Rate: $${form['hourly-rate'].value}</p>
        <p>Additional Information: ${form.info.value}</p>`;


    return false;
}
