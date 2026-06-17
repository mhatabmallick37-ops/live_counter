let msg = document.getElementById("message");

let counter = document.getElementById("counter");

msg.addEventListener("input", function () {

    counter.textContent = msg.value.length + " characters";

});