import { imgdata, cityListBig } from "./utils/data.js";

import SearchBox from "./blocks/search-box/search-box.js";
import enableLangSelect from "./blocks/lang/lang.js";
import Menu from "./blocks/menu/menu.js";
import Slider from "./blocks/slider/slider.js";
import ImagePopup from "./components/ImagePopup.js";

import ListSelector from "./components/ListSelector.js";
import ListSelectorItem from "./components/ListSelectorItem.js";
import ListSelectorStatic from "./components/ListSelectorStatic.js";

/** SEARCH BOX */
const searchBox = new SearchBox({ boxSelector: 'search-box' });

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
//all callbacks are in static class ListSelectorStatic
console.time('CityInit');

//list item template
const listTemplate = document.querySelector('#ls-city').content.querySelector('.ls__list-item');

//creates for each city its ListSelectorItem object with html element
let listSelectorItemArray = cityListBig.map( city => {
  return new ListSelectorItem({
    selectorHide:'ls__hide',
    htmlElement:ListSelectorStatic.createItemElement(city, listTemplate ),
    comparator: ListSelectorStatic.handleCompare
  });
});

//instanciate ListSelector then subscribes all list items and adds to list container
const citySelector = new ListSelector({onClick:ListSelectorStatic.handleItemSelect});
listSelectorItemArray.forEach(cityElement =>{
  citySelector.loadItemAndSubscribe(cityElement.getElement(),cityElement.checkValid)
});

console.timeEnd('CityInit');
