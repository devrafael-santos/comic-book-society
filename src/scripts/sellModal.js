let modal = document.getElementById("sell-modal");

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function modalFunction() {
    modal.style.display = "block";

}
