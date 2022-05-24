// Header positioning

const { height: pageHeaderHeight } = document.querySelector('.header').getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;

// Dropbox Modal

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}

function logBackdropClick() {
  console.log('Это клик в бекдроп');
}
