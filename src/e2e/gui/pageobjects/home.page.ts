import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  public get clearAllButon() {
    return $('button=clear all')
  }

  public get header() {
    return $(`h3`)
  }

  public get birthdaysList() {
    return $('ul')
  }

  public get birthdayItem() {
    return this.birthdaysList.$$('li')
  }
}

export default new HomePage()
