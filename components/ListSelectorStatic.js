/**
 * Helper class with usefull callbacks for ListSelector and ListSelectorItem
 * Contains static function callbacks to work with List Selector and ListSelectorItem
 */
export default class ListSelectorStatic {

  /**
   *  ListSelectorItem Comparator function
   * @param {String} query searching string
   * @param {*} htmlElement item to check
   * @returns {Boolean} true if query found is in element and item shoul stay visible
   */
  static handleCompare(query, htmlElement) {
    return htmlElement.textContent.toLowerCase().includes(query.toLowerCase());
  }

  /**
   * ListSelector function callback triggers on item click
   * @param {HtmlElement} element selected item
   */
  static handleItemSelect(element) {
    console.log('SELECTED CITY: ')
    console.log(element.textContent);
  }

  /**
   * factory to create html element for list item
   * @param {String} itemName
   * @param {Template} templateElement
   * @returns html element
   */
  static createItemElement(itemName, templateElement) {
    const cityElement = templateElement.cloneNode(true);
    cityElement.title = itemName;
    cityElement.textContent = itemName;
    return cityElement;
  }

}
