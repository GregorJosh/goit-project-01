(() => {
  const refs = {
    // openModalBtn: document.querySelector('[data-modal-open]'),
    openNewsletter: document.querySelector('[open-newsletter]'),
    // closeModalBtn: document.querySelector('[data-modal-close]'),
    closeNewsletter: document.querySelector('[close-newsletter]'),
    // modal: document.querySelector('[data-modal]'),
    newsletterModal: document.querySelector('[newsletter-modal]'),
  };

  refs.openNewsletter.addEventListener('click', toggleNewsletterModal);
  refs.closeNewsletter.addEventListener('click', toggleNewsletterModal);

  function toggleNewsletterModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
