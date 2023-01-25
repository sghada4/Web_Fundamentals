// Clicking "I Accept" will make the alert box disappear
function removePopup(id) {
    document.getElementById(id).remove();
}

//Clicking on the cart icon will alert that your cart is empty
function message() {
    alert('Your Cart is empty!');
}

//Hovering over or out the image, it will change its source
function overImage(idImg) {
    document.getElementById(idImg).src = "/images/assets/succulents-2.jpg";
}

function outImage(idImg) {
    document.getElementById(idImg).src = "/images/assets/succulents-1.jpg";
}