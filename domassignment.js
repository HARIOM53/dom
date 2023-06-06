const decrementButton = document.getElementById(`decrement`);
const countElement = document.getElementById(`count`);
const incrementButton = document.getElementById(`increment`);
const resetbutton = document.getElementById(`reset`);

let count = 0;

decrementButton.addEventListener("click", () => {
    count--;
    countElement.textContent = count;
});

incrementButton.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
});

resetbutton.addEventListener("click", () => {
    count = 0;
    countElement.textContent = count;
});
