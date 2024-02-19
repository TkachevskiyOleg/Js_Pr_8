const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bangladesh', 'Belarus', 'Belgium', 'Brazil', 'Bulgaria',
    'Canada', 'China', 'Colombia', 'Croatia', 'Czech Republic',
    'Denmark', 'Egypt', 'Finland', 'France', 'Germany',
    'Greece', 'Hungary', 'India', 'Indonesia', 'Iran',
    'Italy', 'Japan', 'Mexico', 'Netherlands', 'New Zealand',
    'Norway', 'Poland', 'Portugal', 'Pussia', 'Spain',
    'Sweden', 'Switzerland', 'United Kingdom', 'United States',
    'Ukraine', 'South Africa'
];

const citys = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bangladesh', 'Belarus', 'Belgium', 'Brazil', 'Bulgaria',
    'Canada', 'China', 'Colombia', 'Croatia', 'Czech Republic',
    'Denmark', 'Egypt', 'Finland', 'France', 'Germany',
    'Greece', 'Hungary', 'India', 'Indonesia', 'Iran',
    'Italy', 'Japan', 'Mexico', 'Netherlands', 'New Zealand',
    'Norway', 'Poland', 'Portugal', 'Pussia', 'Spain',
    'Sweden', 'Switzerland', 'United Kingdom', 'United States',
    'Ukraine', 'South Africa'
];

function addQuestion(event) {
    event.preventDefault();

    const questionInput = document.getElementById('question');
    const correctAnswerInput = document.getElementById('correctAnswer');


    const question = questionInput.value.trim();
    const correctAnswer = correctAnswerInput.value.trim();

    if (question && correctAnswer) {
        const questionList = document.getElementById('questionList');
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.textContent = `Question: ${question}, Correct Answer: ${correctAnswer}`;

        questionList.appendChild(questionDiv);

        questionInput.value = '';
        correctAnswerInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

function addColor() {
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');

    const redValue = parseInt(redInput.value);
    const greenValue = parseInt(greenInput.value);
    const blueValue = parseInt(blueInput.value);

    if (isValidRGBValue(redValue) && isValidRGBValue(greenValue) && isValidRGBValue(blueValue)) {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        const colorPalette = document.getElementById('colorPalette');
        colorPalette.appendChild(colorBox);

        redInput.value = '0';
        greenInput.value = '0';
        blueInput.value = '0';
    } else {
        alert('Invalid RGB values. Please enter values between 0 and 255.');
    }
}

function isValidRGBValue(value) {
    return !isNaN(value) && value >= 0 && value <= 255;
}





function showSuggestions() {
    const input = document.getElementById('countryInput');
    const suggestionsList = document.getElementById('suggestionsList');

    const inputValue = input.value.trim().toLowerCase();
    const filteredCountries = countries.filter(country =>
        country.toLowerCase().includes(inputValue)
    ).slice(0, 10);

    renderSuggestions(filteredCountries);
}

function showSuggestionsCity() {
    const input = document.getElementById('cityInput');
    const suggestionsList = document.getElementById('suggestionsLists');

    const inputValue = input.value.trim().toLowerCase();
    const filteredCountries = citys.filter(citys =>
        citys.toLowerCase().includes(inputValue)
    ).slice(0, 10);

    renderSuggestionsCity(filteredCountries);
}

function renderSuggestions(suggestions) {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';

    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.className = 'suggestion';
        listItem.textContent = suggestion;
        listItem.onclick = function () {
            document.getElementById('countryInput').value = suggestion;
            suggestionsList.innerHTML = '';
        };

        suggestionsList.appendChild(listItem);
    });
}

function renderSuggestionsCity(suggestions) {
    const suggestionsList = document.getElementById('suggestionsLists');
    suggestionsList.innerHTML = '';

    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.className = 'suggestion';
        listItem.textContent = suggestion;
        listItem.onclick = function () {
            document.getElementById('cityInput').value = suggestion;
            suggestionsList.innerHTML = '';
        };

        suggestionsList.appendChild(listItem);
    });
}

document.addEventListener('click', function (event) {
    const suggestionsList = document.getElementById('suggestionsList');
    const suggestionsLists = document.getElementById('suggestionsLists');
    if (event.target !== suggestionsList && !suggestionsList.contains(event.target) || event.target !== suggestionsLists && !suggestionsLists.contains(event.target)) {
        suggestionsList.innerHTML = '';
    }
});

function saveUserInfo(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="radioGroup1"]:checked') ? document.querySelector('input[name="radioGroup1"]:checked').value : '';
    const country = document.getElementById('countryInput').value;
    const city = document.getElementById('cityInput').value;

    const skills = [];
    if (document.getElementById('lang1').checked) skills.push('HTML');
    if (document.getElementById('lang2').checked) skills.push('CSS');
    if (document.getElementById('lang3').checked) skills.push('JS');
    if (document.getElementById('lang4').checked) skills.push('PHP');
    if (document.getElementById('lang5').checked) skills.push('C++');

    const userInfo = {
        Name: name,
        Surname: surname,
        Birthday: birthday,
        Gender: gender,
        Country: country,
        City: city,
        Skills: skills.join(', ')
    };
    clearForm();

    displayUserInfo(userInfo);

}

function displayUserInfo(userInfo) {
    const userTable = document.getElementById('userTable');

    for (const key in userInfo) {
        const row = userTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = key;
        cell2.textContent = userInfo[key];
    }
}

function clearForm() {
    clearTable();

    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('birthday').value = '';

    const radioGroup = document.getElementsByName('radioGroup1');
    radioGroup.forEach(radio => {
        radio.checked = false;
    });

    document.getElementById('countryInput').value = '';
    document.getElementById('cityInput').value = '';
    document.getElementById('lang1').checked = false;
    document.getElementById('lang2').checked = false;
    document.getElementById('lang3').checked = false;
    document.getElementById('lang4').checked = false;
    document.getElementById('lang5').checked = false;
}

function clearTable() {
    const userTable = document.getElementById('userTable');
    userTable.innerHTML = '';
}

function SignInMes(Email) {
    Email = document.getElementById("Email")

    let pass1 = document.getElementById('password1')

    let pass2 = document.getElementById('password2')

    if (pass1.value != pass2.value) {
        pass1.style.backgroundColor = "red"
        pass2.style.backgroundColor = "red"
        alert("Passwords are different")
    }
    else {
        pass1.style.backgroundColor = ""
        pass2.style.backgroundColor = ""
        alert(`On ${Email.value} sended message with confirmation`)
    }
}

function SignIn(login) {
    let check = document.getElementById("checkbox")
    login = document.getElementById("login")

    if (check.checked) {
        alert(`Hello ${login.value} i remeber you`)
    }
    else {
        alert(`Hello ${login.value} i don't remeber you`)
    }
}