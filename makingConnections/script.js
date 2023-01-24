function editProfile(id) {
    document.getElementById(id).innerText = "Ghada Sassi";
}

function removeUser(idUser, numRequests, nameBtn, numConnections) {
    document.getElementById(idUser).remove();
    document.getElementById(numRequests).innerText--;
    if(nameBtn =="acceptBtn"){
        document.getElementById(numConnections).innerText++;
    }
}