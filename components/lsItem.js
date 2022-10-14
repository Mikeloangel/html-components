export default class LsItem {
  #element;
  #hiddenSelector;

  #isHidden = false;
  #cbCompare;

  constructor({ htmlElement, comparator, selectorHide }) {
    this.#element = htmlElement;
    this.#cbCompare = comparator;
    this.#hiddenSelector = selectorHide;

    this.checkValid = this.checkValid.bind(this);
  }

  checkValid(query, isResetNeeded) {
    if (isResetNeeded) {
      if (this.#cbCompare(query, this.#element)) {
        this.showItem();
        this.#isHidden = false;
      } else {
        this.hideItem();
        this.#isHidden = true;
      }
      return;
    }

    if (query === '') {
      this.showItem();
      this.#isHidden = false;
      return;
    }

    if (this.#isHidden) {
      return;
    }

    if (this.#cbCompare(query, this.#element)) {
      if (this.#isHidden) {
        this.showItem();
        this.#isHidden = false;
      }
    } else {
      if (!this.#isHidden) {
        this.hideItem();
        this.#isHidden = true;
      }
    }
  }

  getElement() {
    return this.#element;
  }

  showItem() {
    this.#element.classList.remove(this.#hiddenSelector);
  }

  hideItem() {
    this.#element.classList.add(this.#hiddenSelector);
  }
}
