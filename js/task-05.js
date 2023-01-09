const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function() { 
    if (input.value.length === 0) {
        output.innerHTML = "Anonymous";
    } else { 
        output.innerHTML = input.value;
    }
})