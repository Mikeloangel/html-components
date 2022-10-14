/**
 * This class subscribes element on action in #cbList
 * This class as well handles adding items to list
 * Use loadItemsAndSubscribe to render item and subscribe for action
 */
export default class Ls{
  #selector;

  #lsElement;
  #lsListElement;
  #inputElement;
  #formElement;

  #cbList = [];
  #onSelect;

  constructor({selector = 'ls', onClick}){
    this.#selector = selector;
    this.#lsElement = document.querySelector(`.${this.#selector}`);
    this.#lsListElement = this.#lsElement.querySelector(`.${this.#selector}__list`)
    this.#inputElement = this.#lsElement.querySelector(`.${this.#selector}__input`);
    this.#formElement = this.#lsElement.querySelector(`.${this.#selector}__form`);

    this.#onSelect = onClick;

    this.#setEventListeners();
  }

  #setEventListeners(){
    this.#inputElement.addEventListener('input',this.#handleInput.bind(this));
    this.#formElement.addEventListener('submit',this.#handleSubmit.bind(this));
    this.#lsListElement.addEventListener('click',this.#handleClick.bind(this));
  }

  #handleInput(e){
    //e.data === null is used to determine is reset for item is needed
    //i. e. backspace will trigger e.data === null
    console.time('HandleInput');
    this.performSearch(e.target.value, e.data === null);
    console.timeEnd('HandleInput');
  }

  #handleSubmit(e){
    // console.time('HandleSubmit');
    e.preventDefault();
    this.performSearch(this.#inputElement.value);
    // console.timeEnd('HandleSubmit');
  }

  #handleClick(e){
    if(e.target.classList.contains(`${this.#selector}__list-item`)){
      this.#onSelect(e.target);
    }
  }

  performSearch(query, needReset = true){
    this.#cbList.forEach(fn => fn(query, needReset));
  }

  loadItemAndSubscribe(item, cb){
    if(typeof cb !== 'function') return;

    this.#cbList.push(cb);
    this.#lsListElement.append(item);
  }
}
