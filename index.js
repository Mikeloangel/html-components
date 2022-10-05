import SearchBox from "./blocks/search-box/search-box.js";
import enableLangSelect from "./blocks/lang/lang.js";
import Menu from "./blocks/menu/menu.js";

const search = new SearchBox({boxSelector: 'search-box'});
enableLangSelect();
const menu = new Menu({})



//disables transition effects to trigger before load
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('.preloader').classList.remove('preloader');
});

