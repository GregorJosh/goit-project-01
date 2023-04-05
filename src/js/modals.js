(() => {
  const refs = {
    heroOpenContactUs: document.querySelector('[hero-open-contact-us]'),
    storeOpenContactUs: document.querySelector('[store-open-contact-us]'),
    closeContactUs: document.querySelector('[close-contact-us]'),

    openThankYou: document.querySelector('[open-thank-you'),
    closeThankYou: document.querySelector('[close-thank-you]'),
    continue: document.querySelector('[continue]'),

    contactUsModal: document.querySelector('[contact-us-modal]'),
    thankYouModal: document.querySelector('[thank-you-modal]'),

    openNewsletter: document.querySelector('[open-newsletter]'),
    closeNewsletter: document.querySelector('[close-newsletter]'),
    submitNewsletter: document.querySelector('.submit__button[close-newsletter]'),
    newsletterModal: document.querySelector('[newsletter-modal]'),
  };

  refs.heroOpenContactUs.addEventListener('click', toggleContactUsModal);
  refs.storeOpenContactUs.addEventListener('click', toggleContactUsModal);
  refs.closeContactUs.addEventListener('click', toggleContactUsModal);

  refs.openThankYou.addEventListener('click', () => {
    refs.contactUsModal.classList.add('is-hidden');

    toggleThankYouModal();
  });
  refs.closeThankYou.addEventListener('click', toggleThankYouModal);
  refs.continue.addEventListener('click', toggleThankYouModal);

  refs.openNewsletter.addEventListener('click', toggleNewsletterModal);
  refs.closeNewsletter.addEventListener('click', toggleNewsletterModal);
  refs.submitNewsletter.addEventListener('click', toggleNewsletterModal);

  function toggleContactUsModal() {
    refs.contactUsModal.classList.toggle('is-hidden');
  }

  function toggleThankYouModal() {
    refs.thankYouModal.classList.toggle('is-hidden');
  }

  function toggleNewsletterModal() {
    refs.newsletterModal.classList.toggle('is-hidden');
  }
})();
