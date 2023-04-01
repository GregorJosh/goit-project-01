(() => {
  const refs = {
    openModalBtn: document.querySelector('[pop-up-open]'),
    closeModalBtn: document.querySelector('[pop-up-close]'),
    modal: document.querySelector('[pop-up]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
