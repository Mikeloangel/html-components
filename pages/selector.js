import { cityListBig } from "../utils/data.js";



import ListSelector from "../components/ListSelector.js";
import ListSelectorItem from "../components/ListSelectorItem.js";
import ListSelectorStatic from "../components/ListSelectorStatic.js";

/** City selector */
//all callbacks are in static class ListSelectorStatic
console.time('CityInit');

//list item template
const listTemplate = document.querySelector('#ls-city').content.querySelector('.ls__list-item');

//creates for each city its ListSelectorItem object with html element
let listSelectorItemArray = cityListBig.map(city => {
  return new ListSelectorItem({
    selectorHide: 'ls__hide',
    htmlElement: ListSelectorStatic.createItemElement(city, listTemplate),
    comparator: ListSelectorStatic.handleCompare
  });
});

//instanciate ListSelector then subscribes all list items and adds to list container
const citySelector = new ListSelector({ onClick: ListSelectorStatic.handleItemSelect });
listSelectorItemArray.forEach(cityElement => {
  citySelector.loadItemAndSubscribe(cityElement.getElement(), cityElement.checkValid)
});

