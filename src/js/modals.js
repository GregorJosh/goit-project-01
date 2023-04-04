(() => {
  const refs = {
    heroOpenContactUs: document.querySelector('[hero-open-contact-us]'),
    storeOpenContactUs: document.querySelector('[store-open-contact-us]'),
    closeContactUs: document.querySelector('[close-contact-us]'),
    openNewsletter: document.querySelector('[open-newsletter]'),

    openThankYou: document.querySelector('[open-thank-you'),
    closeThankYou: document.querySelector('[close-thank-you]'),
    continue: document.querySelector('[continue]'),
    closeNewsletter: document.querySelector('[close-newsletter]'),

    contactUsModal: document.querySelector('[contact-us-modal]'),
    thankYouModal: document.querySelector('[thank-you-modal]'),
    newsletterModal: document.querySelector('[newsletter-modal]'),
  };

  refs.heroOpenContactUs.addEventListener('click', toggleContactUsModal);
  refs.storeOpenContactUs.addEventListener('click', toggleContactUsModal);
  refs.closeContactUs.addEventListener('click', toggleContactUsModal);
  refs.openNewsletter.addEventListener('click', toggleNewsletterModal);
  refs.closeNewsletter.addEventListener('click', toggleNewsletterModal);

  refs.openThankYou.addEventListener('click', () => {
    refs.contactUsModal.classList.add('is-hidden');

    toggleThankYouModal();
  });
  refs.closeThankYou.addEventListener('click', toggleThankYouModal);
  refs.continue.addEventListener('click', toggleThankYouModal);

  function toggleContactUsModal() {
    refs.contactUsModal.classList.toggle('is-hidden');
  }

  function toggleThankYouModal() {
    refs.thankYouModal.classList.toggle('is-hidden');
  }

  function toggleNewsletterModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
