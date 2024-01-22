
let submittedArray = [];

function submitForm(event) {
    event.preventDefault();

    let cityName = document.getElementById('cityName').value;
    let yourName = document.getElementById('yourName').value;

    let submission = {
        cityName: cityName,
        yourName: yourName
    };
    submittedArray.push(submission);

    displaySubmittedValues();

    document.getElementById('your-name').reset();
}

function displaySubmittedValues() {
    let submittedValues = document.getElementById('submitted-values');
    submittedValues.innerHTML = '<h3>Submitted Values:</h3>';

    submittedArray.forEach(function (submission, index) {
        submittedValues.innerHTML += '<p>Submission ' + (index + 1) + ':<br>' +
            'City Name: ' + submission.cityName + '<br>' +
            'Your Name: ' + submission.yourName + '</p>';
    });
}