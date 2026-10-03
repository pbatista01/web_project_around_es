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
const popupInputName = editPopup.querySelector(".popup__input_type_name");
const popupInputDescription = editPopup.querySelector(".popup__input_type_description");
const popupForm = editPopup.querySelector("#edit-profile-form");

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");

const addCardButton = document.querySelector(".profile__add-button");
const newCardModal = document.querySelector("#new-card-popup");

const inputCardName = newCardModal.querySelector(".popup__input_type_card-name");
const inputCardLink = newCardModal.querySelector(".popup__input_type_url");
const cardsContainer = document.querySelector(".cards__list");
const createCardButton = newCardModal.querySelector(".popup__button");

const newImageModal = document.querySelector("#image-popup");
const popupImageCloseBtn = newImageModal.querySelector(".popup__close");

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

function handleCardFormSubmit(evt){
    evt.preventDefault();
    const cardName = inputCardName.value;
    const cardLink = inputCardLink.value;
    renderCard(cardName, cardLink, cardsContainer);
    closeModal(newCardModal);
    popupForm.reset();
}

function getCardElement(name ="Sin titulo", link = "./images/placeholder.jpg"){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    const cardLikeButton = cardElement.querySelector(".card__like-button");
    cardLikeButton.addEventListener("click", handleLikeButton);

    function handleLikeButton(evt){
        evt.target.classList.toggle("card__like-button_is-active");
    }

    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", handleDeleteButton);

    function handleDeleteButton(evt){
        evt.target.closest(".card").remove();
    }

    cardImage.addEventListener("click", handleCardImageClick);

    return cardElement;
}

function handleCardImageClick(evt){
    const cardImage = evt.target;
    const imagePopup = document.querySelector("#image-popup");
    const imagePopupImage = imagePopup.querySelector(".popup__image");
    const imagePopupCaption = imagePopup.querySelector(".popup__caption");
    imagePopupImage.src = cardImage.src;
    imagePopupImage.alt = cardImage.alt;
    imagePopupCaption.textContent = cardImage.alt;
    openModal(imagePopup);
}

function renderCard(name, link, container){
    const cardElement = getCardElement(name, link);
    container.append(cardElement);
}


initialCards.forEach(function(card){
    renderCard(card.name, card.link, document.querySelector(".cards__list"));
});

profileEditBtn.addEventListener("click", function(){
    handleOpenEditModal();
});

popupCloseBtn.addEventListener("click", function(){
    closeModal(editPopup);
});

popupForm.addEventListener("submit", handleProfileFormSubmit);

addCardButton.addEventListener("click", function(){
    openModal(newCardModal);
});

createCardButton.addEventListener("click", handleCardFormSubmit);

popupImageCloseBtn.addEventListener("click", function(){
    closeModal(newImageModal);
});