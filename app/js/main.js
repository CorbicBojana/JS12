var form = document.getElementById("form");
var formInput = document.getElementById("form_input");
var button = document.getElementById("button");

form.addEventListener("submit", function(e) {
    e.preventDefault();
})

formInput.addEventListener("change", function(e) {
    console.log(e.target.value);
})

button.addEventListener("click", function(e) {
    formInput.value = "";
})