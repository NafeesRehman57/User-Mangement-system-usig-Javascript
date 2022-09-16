// Default Users
var user1 = {username: "Umar Ahmad", email: "umar@gmail.com", password: "123"}
var user2 = {username: "Ahmad Raza", email: "ahmad@gmail.com", password: "123"}
var usersArray = [user1, user2];

// Screen Switching
function switchToScreen(screenId) {

    // Hide All Screens First
    var allScreens = document.querySelectorAll(".screenSection");
    for (var i = 0; i < allScreens.length; i++) {
        allScreens[i].style.display = 'none';
    }

    // After Hiding show only selected Screen Id
    document.getElementById(screenId).style.display = "block";

}

// Show users list when Page loaded
generateUsersList();



// ----------------------------------------
/* Users CRUD Functions */
function generateUsersList() {

    switchToScreen('usersListScreen')

    detailsList.innerHTML = "";

    for (var i = 0; i < usersArray.length; i++) {
        detailsList.innerHTML += i + ") " + usersArray[i].email + "<br>";
    }

}

function addUser() {

    let user = {
        username: document.getElementById("username").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim(),
    }

    if (user.username === "" || user.email === "" || user.password === "") {
        alert("Please fill in the required fields.");
        return false;
    }

    usersArray.push(user)
    alert("User successfully added");
    generateUsersList();
    return false;

}

function deleteUser() {

    var userEmail = document.getElementById("deleteEmailField").value.trim()

    var isDeleted = false;
    for (var i = 0; i < usersArray.length; i++) {

        if (usersArray[i].email === userEmail) {
            usersArray.splice(i, 1)
            isDeleted = true;
            break;
        }

    }

    if (isDeleted) {
        alert("User has been successfully deleted")
    } else {
        alert("Couldn't find this user in our database.")
    }

    generateUsersList();
    return false;

}

function loginUser() {

    var userEmail = document.getElementById("loginEmailField").value.trim()
    var userPassword = document.getElementById("loginPasswordField").value.trim()
    var user = false;

    for (var i = 0; i < usersArray.length; i++) {

        if (usersArray[i].email === userEmail && usersArray[i].password === userPassword) {
            user = usersArray[i]
            break;

        }

    }

    if (user) {
        currentUser.innerHTML = user.username;
        alert("You're successfully logged in.")
        generateUsersList();
    } else {
        alert("We couldn't find this user in our database.")
    }

    return false;

}