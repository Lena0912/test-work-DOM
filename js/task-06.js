const inputForm = document.querySelector('input[data-length="6"]');

inputForm.addEventListener('blur', onHandler);

function onHandler(event) {    

    const { value, dataset, classList } = event.currentTarget;

    if (value.length === Number(dataset.length)) {
        classList.remove('invalid');
        classList.add('valid');
    } else {
        classList.remove('valid');
        classList.add('invalid');
    }

}