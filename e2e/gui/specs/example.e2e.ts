import homePage from '../pageobjects/home.page.js'
import { assert } from 'chai'

describe('Home', () => {
  it('should remove all birthdays when the clear all button is clicked', async () => {
    homePage.open()

    const headerText = await homePage.header.getText()
    assert.include(headerText, 'Birthdays')
    await homePage.clearAllButon.click()
    assert.exists(await homePage.birthdaysList)
  })
})
