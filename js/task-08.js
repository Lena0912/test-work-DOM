const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    console.dir(formElements);

    const formData = new FormData(event.currentTarget);
    const formDataObject = {};
   
    formData.forEach((value, key) => {
        formDataObject[key] = value;
       
    });

    if (formDataObject.email === '' || formDataObject.password === '') {
        alert('Всі поля мають бути заповнені');
        return;
    }
    console.log(formDataObject);
    form.reset();
}
