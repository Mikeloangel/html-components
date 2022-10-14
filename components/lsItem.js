export default class LsItem{
  #element;
  #hiddenSelector;
  #cbCompare;

  constructor({htmlElement, comparator, selectorHide}){
    this.#element = htmlElement;
    this.#cbCompare = comparator;
    this.#hiddenSelector = selectorHide;

    this.checkValid = this.checkValid.bind(this)
  }

  checkValid(query){
    if(this.#cbCompare(query, this.#element)){
      this.showItem();
    }else{
      this.hideItem();
    }
  }

  getElement(){
    return this.#element;
  }

  showItem(){
    this.#element.classList.remove(this.#hiddenSelector);
  }

  hideItem(){
    this.#element.classList.add(this.#hiddenSelector);
  }
}
