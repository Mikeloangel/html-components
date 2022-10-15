import { imgdata } from "../utils/data.js";

import Slider from "../components/Slider.js";
import ImagePopup from "../components/ImagePopup.js";


/** Slider gallery */
const slider = new Slider({ onClick: handleSliderClick });
slider.loadCards(imgdata);

function handleSliderClick(card) {
  imgPopup.open(card.img, card.name);
}

/** Image popup */
const imgPopup = new ImagePopup({ selector: 'imagepopup' });
