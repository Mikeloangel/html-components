export default class Slider {
  #sliderElement;
  #imgTopElement;
  #imgBottomElement;
  #descriptionElement;
  #sliderLinkElement;

  #btnNext;
  #btnPrevious;

  #currentCard = 0;
  #cards = [];

  constructor({ selector = 'slider' }) {
    this.#sliderElement = document.querySelector(`.${selector}`);
    this.#imgTopElement = this.#sliderElement.querySelector('.slider_imgA');
    this.#imgBottomElement = this.#sliderElement.querySelector('.slider_imgB');
    this.#sliderLinkElement = this.#sliderElement.querySelector('.slider__img-link')
    this.#descriptionElement = this.#sliderElement.querySelector('.slider__description');
    this.#btnNext = this.#sliderElement.querySelector('.slider_next');
    this.#btnPrevious = this.#sliderElement.querySelector('.slider_previous');

    this.#setEventListeners();
  }

  #setEventListeners() {
    this.#btnNext.addEventListener('click', this.nextSlide.bind(this));
    this.#btnPrevious.addEventListener('click', this.previousSlide.bind(this));
  }

  nextSlide(e) {
    e.preventDefault();

    if (this.#currentCard + 1 != this.#cards.length) {
      this.#currentCard++;
      this.renderSlider();
    }
  }

  previousSlide(e) {
    e.preventDefault();

    if (this.#currentCard > 0) {
      this.#currentCard--;
      this.renderSlider();
    }
  }

  /**
   *
   * @param {Array} cardsArray array of cards {link, name}
   * @param {Boolean} isAltering if true current cards will be replaced with first argument
   */
  loadCards(cardsArray, isAltering = false) {
    if (isAltering) {
      this.#cards = cardsArray;
    } else {
      this.#cards = this.#cards.concat(cardsArray);
    }

    this.#currentCard = 0;

    this.renderSlider();
  }

  renderSlider() {
    const current = this.#cards[this.#currentCard];

    this.#imgTopElement.src = current.img;
    this.#imgTopElement.alt = current.name;
    this.#imgBottomElement.src = current.img;
    this.#imgBottomElement.alt = current.name;

    this.#descriptionElement.innerText = current.name || ' ';
    this.#sliderLinkElement.href = current.link;

    if (this.#currentCard === 0) {
      this.#btnPrevious.classList.add('slider__service-link_inactive');
    } else {
      this.#btnPrevious.classList.remove('slider__service-link_inactive');
    }

    if (this.#currentCard + 1 === this.#cards.length) {
      this.#btnNext.classList.add('slider__service-link_inactive');
    } else {
      this.#btnNext.classList.remove('slider__service-link_inactive');
    }
  }
}
