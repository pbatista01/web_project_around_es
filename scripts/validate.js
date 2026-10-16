function showInputError(inputElement, errorMessage){
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__error_visible");
}

function hideInputError(inputElement){
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__error_visible");
}

function checkInputValidity(inputElement){
    if(!inputElement.validity.valid){
        showInputError(inputElement, inputElement.validationMessage);
    } else {
        hideInputError(inputElement);
    }
}

function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add("popup__button_disabled");
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove("popup__button_disabled");
        buttonElement.disabled = false;
    }
}

export function setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector(".popup__button");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function(){
            checkInputValidity(inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

export function resetValidation(formElement){
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector(".popup__button");
    inputList.forEach((inputElement) => {
        hideInputError(inputElement);
    });
    toggleButtonState(inputList, buttonElement);
}
