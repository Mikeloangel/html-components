import SearchBox from "../components/SearchBox.js";
import enableLangSelect from "../utils/enableLangSelect.js";
import Menu from "../components/Menu.js";
import enableHints from "../utils/enableHint.js";

/** SEARCH BOX */
const searchBox = new SearchBox({
  idSelector: 'searchbox',
  onSubmit: (query) => {
    window.open(`https://www.google.com/search?q=${query}`);
  }
});

/** Language selector */
enableLangSelect();

/** Burger menu */
const menu = new Menu({})

/** hints */
enableHints();
