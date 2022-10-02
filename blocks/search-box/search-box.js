export default class SearchBox {
  #searchElement;
  #inputElement;
  #buttonElement;
  #isOpen = false;

  constructor({ boxSelector }) {
    this.#searchElement = document.querySelector(`.${boxSelector}`);
    this.#inputElement = this.#searchElement.querySelector('.search-box__input');
    this.#buttonElement = this.#searchElement.querySelector('.search-box__button');

    this.#setEventListeners();
  }

  #setEventListeners() {
    this.#buttonElement.addEventListener('click', () => {
      if (this.#isOpen) {
        if (this.#inputElement.value.length !== 0) {
          window.open(`https://yandex.ru/search/?text=${this.#inputElement.value}`);
          this.#inputElement.value = '';
        }
        this.#isOpen = false;
      } else {
        this.#inputElement.focus();
        this.#isOpen = true;
      }
    });

  }

}

