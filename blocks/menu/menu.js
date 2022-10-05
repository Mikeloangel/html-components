export default class Menu{
  #menuElement;
  #burgerElement;
  #menuContainerElement;
  #closeElement;

  constructor({selector = 'menu'}){
    this.#menuElement = document.querySelector(`.${selector}`);
    this.#burgerElement = this.#menuElement.querySelector('.menu__burger');
    this.#menuContainerElement = this.#menuElement.querySelector('.menu__backdrop');
    this.#closeElement = this.#menuElement.querySelector('.menu__close');

    this.handleEscClose = this.handleEscClose.bind(this);

    this.#setListeners();

    // this.open();
  }

  #setListeners(){
    this.#burgerElement.addEventListener('click',this.open.bind(this));
    this.#closeElement.addEventListener('click', this.close.bind(this))
  }

  handleEscClose(e){
    if(e.key==='Escape'){
      this.close();
    }
  }

  open(){
    this.#menuContainerElement.classList.add('menu__container_visible');
    this.#burgerElement.classList.add('menu__burger_active');
    this.#closeElement.classList.remove('.menu__close_hidden');

    window.addEventListener('keydown',this.handleEscClose);
  }

  close(){
    this.#menuContainerElement.classList.remove('menu__container_visible');
    this.#burgerElement.classList.remove('menu__burger_active');
    this.#closeElement.classList.add('.menu__close_hidden');

    window.removeEventListener('keydown',this.handleEscClose);
  }
}
