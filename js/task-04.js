const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueId = document.querySelector("#value");

let counterValue = 0;

const changeValue = () => { 
    valueId.innerHTML = counterValue;
}

const decrement = () => { 
    counterValue -= 1;
changeValue()
}

const increment = () => { 
    counterValue += 1;
   changeValue()
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);