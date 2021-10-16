'use strict';

const modal = document.querySelector('.modal');
const displayModals = document.querySelectorAll('.display-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');



displayModals.forEach(displayModal => {
    displayModal.addEventListener('click', displaysModal)
});

const closeModals = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click', closeModals);

overlay.addEventListener('click', closeModals)



function displaysModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}