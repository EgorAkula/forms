let myForm = document.querySelector("#myForm");
let sendBtn = document.querySelector("#sendButton");

sendBtn.addEventListener('click', (event) => {
    let formElement = myForm.elements;
    console.log(formElement.name.value);
    console.log(formElement.lastName.value);
    console.log(formElement.gender.value);

    if (formElement.auto.checked == true) {
        console.log('Есть автомобиль');
    } else {
        console.log('Нету автомобиля');
    }

    if (formElement.gender.value == 'm') {
        console.log('Мужчина');
    } if (formElement.gender.value == 'f') {
        console.log('Женщина');
    }
})

