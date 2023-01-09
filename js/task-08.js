const form = document.querySelector(".login-form");
const email = document.querySelector("[name='email']")
const password = document.querySelector("[name='password']");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
   
    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены")
    }
        
    const resultForm = { email: email.value, Password: password.value }
    
    form.reset();
    console.log(resultForm);
}
