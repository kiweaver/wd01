const page1 = document.querySelector(".page-1")
const page2 = document.querySelector(".page-2")
const btnUp = document.querySelector(".btn-up")
const btnDown = document.querySelector(".btn-down")

btnUp.addEventListener("click", () =>{
    page1.classList.add("up")
    page1.classList.remove("down")
})
btnDown.addEventListener("click", () =>{
    page1.classList.add("down")
    page1.classList.remove("up")
})

//page three - contact page
document.getElementById('submitButton').addEventListener('click', function() {

    //This function checks for a valid email address
    function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    }

    let errorMessage = "";
    let fieldMissing = "";

    //Check fields for input,
    // concat error string to prompt user to add some input to that field
    if (document.getElementById('fullName').value == "") {
    fieldMissing += "<br>First Name";
    }
    if (document.getElementById('email').value == "") {
    fieldMissing += "<br>Email";
    }

    //Append fieldMissing string to errorMessage string
    if (fieldMissing != "") {
    errorMessage += "<p>The following field(s) are missing:" + fieldMissing;
    }

    //Check that email input is a valid email address
    if (isEmail(document.getElementById('email').value) == false) {
    errorMessage += "<p>You must enter a valid email address </p>";
    }

    //Add errorMessage string as the html content on the errorMessage div
    if (errorMessage != "") {
    document.getElementById('errorMessage').innerHTML = errorMessage;
    } else {
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
    }

    });