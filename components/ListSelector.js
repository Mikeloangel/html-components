/**
 * This class subscribes element on action in #cbList
 * This class as well handles adding items to list
 * Use loadItemsAndSubscribe to render item and subscribe for action
 */
export default class ListSelector {
  #selector;

  #lsElement;
  #lsListElement;
  #inputElement;
  #formElement;
  #previousValue;

  #cbList = [];
  #onSelect;

  constructor({ selector = 'ls', onClick }) {
    this.#selector = selector;
    this.#lsElement = document.querySelector(`.${this.#selector}`);
    this.#lsListElement = this.#lsElement.querySelector(`.${this.#selector}__list`)
    this.#inputElement = this.#lsElement.querySelector(`.${this.#selector}__input`);
    this.#formElement = this.#lsElement.querySelector(`.${this.#selector}__form`);

    this.#onSelect = onClick;

    this.#setEventListeners();
  }

  #setEventListeners() {
    this.#inputElement.addEventListener('input', this.#handleInput.bind(this));
    this.#inputElement.addEventListener('keydown', this.#handleKeyPres.bind(this));
    this.#formElement.addEventListener('submit', this.#handleSubmit.bind(this));
    this.#lsListElement.addEventListener('click', this.#handleClick.bind(this));
  }

  #handleInput(e) {
    //e.data === null is used to determine is reset for item is needed
    //i. e. backspace will trigger e.data === null
    //!e.target.value.startsWith(this.#previousValue) means that if user made selection and started writing over

    console.time('HandleInput');

    const isRevalidate = e.data === null || !e.target.value.startsWith(this.#previousValue);
    this.performSearch(e.target.value.trim(), isRevalidate);
    this.#previousValue = e.target.value;

    console.timeEnd('HandleInput');
  }

  #handleSubmit(e) {
    e.preventDefault();
    this.performSearch(this.#inputElement.value.trim(), true);
  }

  #handleKeyPres(e) {
    if (e.key === 'Escape') {
      this.#inputElement.value = '';
      this.performSearch(e.target.value, true);
    }
  }

  #handleClick(e) {
    if (e.target.classList.contains(`${this.#selector}__list-item`)) {
      this.#onSelect(e.target);
    }
  }

  performSearch(query, isResetNeeded = true) {
    this.#cbList.forEach(fn => fn(query, isResetNeeded));
  }

  loadItemAndSubscribe(item, cb) {
    if (typeof cb !== 'function') return;

    this.#cbList.push(cb);
    this.#lsListElement.append(item);
  }
}
