const form = document.querySelector(".login-form");
const inputs = form.querySelectorAll("input");
let resultForm = {};
 
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
   
    for (let input of inputs) { 
        if (input.value === "") { 
            alert("Все поля должны быть заполнены")
            break;
        } 
        let fieldName = input.getAttribute("name");
        let fieldValue = input.value;
        resultForm[fieldName] = fieldValue;
    }
    form.reset();
    console.log(resultForm);
}
