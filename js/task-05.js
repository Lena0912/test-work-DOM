const inputForm = document.querySelector('[id="name-input"]');
const outputForm = document.querySelector('[id="name-output"]');
inputForm.addEventListener('input', handleImput);

function handleImput(event) {
    event.preventDefault();

    outputForm.textContent = event.currentTarget.value.trim();


    if (event.currentTarget.value.trim() === "") {
      outputForm.textContent = "Anonymous";
    }
}
console.log(inputForm.value);
console.log(outputForm);
