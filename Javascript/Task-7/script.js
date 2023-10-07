const image = document.getElementById("image");
const startbutton = document.querySelector("start");
const stopbutton = document.querySelector("stop");

let isMoving = false;

function startanimation() {
    if (!isMoving) {
        isMoving = true;
        image.classList.add("move");
    }
}
function stopanimation() {
    if (isMoving) {
        isMoving = false;
        image.classList.remove("move");
    }
}
startbutton.addEventListener("click", startanimation);
stopbutton.addEventListener("click", stopanimation);