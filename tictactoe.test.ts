import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await (await driver).sleep(3000)
    
});

test('clicking upper left square adds X to square', async () => {

    let leftSquare = await (await driver).findElement(By.id('cell-0'))

    await leftSquare.click()

    await (await driver).sleep(3000)
})

test('clicking upper right square adds X to square', async () => {

    let rightSquare = await (await driver).findElement(By.id('cell-2'))

    await rightSquare.click()

    await (await driver).sleep(3000)
})

test('clicking lower right square adds X to square', async () => {

    let lowRightSquare = await (await driver).findElement(By.id('cell-8'))

    await lowRightSquare.click()

    await (await driver).sleep(3000)
})

test('check computer move', async () => {
    let button = await (await driver).findElement(By.id('start-game'))
    
    await button.click();

    await (await driver).findElement(By.xpath('//input')).sendKeys('o')

    await (await driver).sleep(3000)
})