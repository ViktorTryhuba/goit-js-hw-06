const value = document.querySelector('#value');
const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");

let sum = 0;
const handleIncrementClick = () => {
    sum += 1 ;

    value.textContent = sum;
};

const handleDecrementClick = () => {
    sum -= 1 ;

    value.textContent = sum;
};

decrement.addEventListener("click", handleDecrementClick);
increment.addEventListener("click", handleIncrementClick);