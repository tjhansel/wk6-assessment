
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('View All Bots', async () => {
    await driver.findElement(By.id('see-all'))
    await driver.sleep(5000)
    const allBots =  await driver.findElement(By.id('all-bots'))
    expect(allBots).toBe(true)
})