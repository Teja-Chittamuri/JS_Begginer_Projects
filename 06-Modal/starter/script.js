'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const openButtonModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeButtonModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openButtonModal);
btnCloseModal.addEventListener('click', closeButtonModal);
overlay.addEventListener('click', closeButtonModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if (!modal.classList.contains('hidden')) {
    closeButtonModal();
  }
});
