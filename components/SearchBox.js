export default class SearchBox {
  #searchFormElement;
  #inputElement;
  #onSubmitCallBack;

  constructor({ idSelector = "searchbox", onSubmit = null }) {
    this.#searchFormElement = document.querySelector(`#${idSelector}`);
    this.#inputElement = this.#searchFormElement.querySelector('.search-box__input');

    this.#onSubmitCallBack = onSubmit;

    this.#setEventListeners();
  }

  #setEventListeners() {
    this.#searchFormElement.addEventListener('submit', this.#handleSubmit);
    this.#inputElement.addEventListener('blur', () => { setTimeout(this.#handleClose, 100) });
  }

  #handleOpen = () => {
    this.#inputElement.classList.add('search-box__input_visible');
    setTimeout(() => this.#inputElement.focus(), 100);
  }

  #handleClose = () => {
    this.#inputElement.classList.remove('search-box__input_visible');
  }

  #handleSubmit = (e) => {
    e.preventDefault();
    if (this.#inputElement.classList.contains('search-box__input_visible') && this.#inputElement.value.length > 0) {
      if (typeof this.#onSubmitCallBack === 'function') {
        this.#onSubmitCallBack(this.#inputElement.value);
      } else {
        console.log(`SEARCHING FOR: ${this.#inputElement.value}`);
      }

      this.#searchFormElement.reset();
      this.#handleClose();
    } else {
      this.#handleOpen();
    }
  }
}

