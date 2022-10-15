import SearchBox from "../components/SearchBox.js";
import enableLangSelect from "../utils/enableLangSelect.js";

const templateLiElement = document.querySelector('#searchItem').content.querySelector('.section__list-item');
const recentSearchUl = document.querySelector('#searchList');

const recentSearchResetButton = document.querySelector('#clear-search-query');

/** SEARCH BOX */
const searchBox = new SearchBox({
  idSelector: 'searchbox2',
  onSubmit: (query) => {
    const newLi = createRecentSearchElement(query);
    apendListItem(newLi);
    pushLocalStorage(query);
    revalidateResetButton();
  }
});

function createRecentSearchElement(text) {
  const newLi = templateLiElement.cloneNode(true);
  newLi.textContent = text;
  return newLi;
}

function pushLocalStorage(text) {
  let storage = [];
  if (localStorage.getItem('recent')) {
    storage.push(localStorage.getItem('recent'))
  }
  storage.push(text);
  localStorage.setItem('recent', storage);
}

function clearLocalStorage() {
  localStorage.removeItem('recent');
}

function apendListItem(element) {
  recentSearchUl.append(element);
}

function retrieveLocalStorage() {
  let storage = localStorage.getItem('recent');
  if (!storage) return;

  storage.split(',').forEach(e => {
    let item = createRecentSearchElement(e);
    apendListItem(item);
  });
}

function revalidateResetButton() {
  if (recentSearchUl.children.length !== 0) {
    recentSearchResetButton.classList.remove('button_hidden');
  } else {
    recentSearchResetButton.classList.add('button_hidden');
  }
}

function clearList() {
  Array.from(recentSearchUl.children).forEach(e => {
    e.remove();
    e = null;
  })
}

retrieveLocalStorage();
revalidateResetButton();

recentSearchResetButton.addEventListener('click', () => {
  clearLocalStorage();
  clearList();
  revalidateResetButton();
})


/**
 * Enable lang select
 */

enableLangSelect('lang2');
