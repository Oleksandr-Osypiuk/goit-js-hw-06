
const input = document.querySelector("input");
const datalength = input.dataset.length;

input.addEventListener("blur", () => { 
    if (input.value.length > datalength || input.value.length < datalength) {
        input.classList.add("invalid")
        input.classList.remove("valid")
    } else { 
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
})
