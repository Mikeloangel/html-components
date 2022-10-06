export default class ImagePopup {
  #imagePopupSelector;

  #imagePopupElement;
  #imgElement;
  #captionElement;

  constructor({ selector = 'imagepopup' }) {
    this.#imagePopupSelector = selector;

    this.#imagePopupElement = document.querySelector(`.${selector}`);
    this.#imgElement = this.#imagePopupElement.querySelector(`.${selector}__img`);
    this.#captionElement = this.#imagePopupElement.querySelector(`.${selector}__caption`);

    this.#imagePopupElement.addEventListener('click', this.close.bind(this))
  }

  handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  open(link, caption) {
    this.#imgElement.src = link;
    this.#imgElement.alt = caption;
    this.#captionElement.textContent = caption;
    this.#imagePopupElement.classList.add(`${this.#imagePopupSelector}_visible`);

    window.addEventListener('keydown', this.handleEscClose.bind(this));
  }

  close() {
    this.#imagePopupElement.classList.remove(`${this.#imagePopupSelector}_visible`);
    this.#imgElement.src = '#';
    this.#imgElement.alt = '#';
    this.#captionElement.textContent = '';

    window.removeEventListener('keydown', this.handleEscClose.bind(this));
  }
}
