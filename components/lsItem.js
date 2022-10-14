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
    //on reset perform full compare
    if (isResetNeeded) {
      if (this.#cbCompare(query, this.#element)) {
        this.showItem();
      } else {
        this.hideItem();
      }
      return;
    }

    //do not compare if it is already hidden
    //should use a reset flag to show item
    if (this.#isHidden) {
      return;
    }

    //compare to determine do we need to hide element
    if (!this.#cbCompare(query, this.#element)) {
      this.hideItem();
    }
  }

  getElement() {
    return this.#element;
  }

  showItem() {
    this.#element.classList.remove(this.#hiddenSelector);
    this.#isHidden = false;
  }

  hideItem() {
    this.#element.classList.add(this.#hiddenSelector);
    this.#isHidden = true;
  }
}
