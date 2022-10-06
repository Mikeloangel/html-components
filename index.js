import SearchBox from "./blocks/search-box/search-box.js";
import enableLangSelect from "./blocks/lang/lang.js";
import Menu from "./blocks/menu/menu.js";
import Slider from "./blocks/slider/slider.js";
import ImagePopup from "./components/ImagePopup.js";

import { imgdata } from "./utils/data.js";

const search = new SearchBox({ boxSelector: 'search-box' });
enableLangSelect();
const menu = new Menu({})

// const slider = new Slider({});
const slider = new Slider({ onClick: handleSliderClick });
slider.loadCards(imgdata);

function handleSliderClick(card) {
  imgPopup.open(card.img, card.name);
}

const imgPopup = new ImagePopup({ selector: 'imagepopup' })


//disables transition effects to trigger before load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.preloader').classList.remove('preloader');
});

