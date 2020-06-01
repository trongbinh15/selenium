const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://pim.app.dev.retaildds.net/');
        await driver.wait(until.elementLocated(By.css('h2')), 5000);

        await driver.findElement(By.name('Username')).sendKeys('administrator@gmail.com');
        await driver.findElement(By.name('Password')).sendKeys('123456', Key.ENTER);

        await driver.wait(until.elementLocated(By.xpath("//p[@class='list-view-title h4']")), 5000);

        const title = await driver.findElement(By.xpath("//p[@class='list-view-title h4']")).getText();

        if(title ==='Product Management'){
            console.log('pass');
        }

        await driver.wait(until.elementLocated(By.xpath('h33332')), 5000);

    }
    finally{
        driver.quit();
    }
})();