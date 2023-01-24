function like(id) {
    document.getElementById(id).innerText++;
}

/* an other solution using querySelector()
function like(id){
    document.querySelector(id).innerText++;
    //and I'll pass '#id' in the HTML File
}*/

function remove(id) {
    document.getElementById(id).remove();
}

function logout(element) {
    element.innerText = "Logout";
}
