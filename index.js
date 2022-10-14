import SearchBox from "./blocks/search-box/search-box.js";
import enableLangSelect from "./blocks/lang/lang.js";
import Menu from "./blocks/menu/menu.js";
import Slider from "./blocks/slider/slider.js";
import ImagePopup from "./components/ImagePopup.js";

import { imgdata, cityListBig } from "./utils/data.js";

import Ls from "./components/ls.js";
import LsItem from "./components/lsItem.js";

/** SEARCH BOX */
const search = new SearchBox({ boxSelector: 'search-box' });

/** Language selector */
enableLangSelect();

/** Burger menu */
const menu = new Menu({})

/** Slider gallery */
const slider = new Slider({ onClick: handleSliderClick });
slider.loadCards(imgdata);

function handleSliderClick(card) {
  imgPopup.open(card.img, card.name);
}

/** Image popup */
const imgPopup = new ImagePopup({ selector: 'imagepopup' });

/** City selector */

console.time('Init')

const listTemplate = document.querySelector('#ls-city').
                      content.querySelector('.ls__list-item');


function createCityElement(cityName) {
  const cityElement = listTemplate.cloneNode(true);
  cityElement.title = cityName;
  cityElement.textContent = cityName;
  return cityElement;
}

function handleCompare(query, htmlElement) {
  return  htmlElement.textContent.toLowerCase().includes(query.toLowerCase());
}

function handleCitySelect(element){
  console.log(element.textContent);
}

let cityListElements = cityListBig.map( city => {
  return new LsItem({comparator: handleCompare, selectorHide:'ls__hide', htmlElement:createCityElement(city)})
});

const citySelector = new Ls({onClick:handleCitySelect});

cityListElements.forEach(cityElement =>{
  citySelector.loadItemAndSubscribe(cityElement.getElement(),cityElement.checkValid)
});

console.timeEnd('Init');
