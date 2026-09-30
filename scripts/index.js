const initialCards = [
    {name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
]

const profileEditBtn = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const popupCloseBtn = editPopup.querySelector(".popup__close");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
let popupInputName = editPopup.querySelector(".popup__input_type_name");
let popupInputDescription = editPopup.querySelector(".popup__input_type_description");
let popupForm = editPopup.querySelector("#edit-profile-form");

function openModal(modal){
    modal.classList.add("popup_is-opened");
}

function closeModal(modal){
    modal.classList.remove("popup_is-opened");
}

function fillProfileForm(){
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
}

function handleOpenEditModal(){
    fillProfileForm();
    openModal(editPopup);
}

function handleProfileFormSubmit(evt){
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
    closeModal(editPopup);
}


initialCards.forEach(function(card){
    console.log(card.name);
});

profileEditBtn.addEventListener("click", function(){
    handleOpenEditModal();
});

popupCloseBtn.addEventListener("click", function(){
    closeModal(editPopup);
});

popupForm.addEventListener("submit", handleProfileFormSubmit);

