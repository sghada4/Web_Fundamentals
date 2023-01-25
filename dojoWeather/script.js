function message() {
    alert("Loading weather report...")
}

function removeCookie(id) {
    document.getElementById(id).remove();
}

var count;
function temperature(value, classMax, classMin) {
    // document.getElementById(idDegree);
    if (value == "1") {
        document.getElementsByClassName(classMax)[count].innerText * ((9 / 7) + 32);
        // (0 °C × 9/5) + 32 = 32 °F
        count++;
    }
    if (value == "2") {
        document.getElementsByClassName(classMin)[count].innerText - 32 * 5 / 9;
        // (32 °F − 32) × 5/9 = 0 °C
        count++;
    }
}