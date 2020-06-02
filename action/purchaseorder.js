const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://po.app.dev.retaildds.net/');
        await driver.wait(until.elementLocated(By.css('h2')), 5000);

        await driver.findElement(By.name('Username')).sendKeys('administrator@gmail.com');
        await driver.findElement(By.name('Password')).sendKeys('123456', Key.ENTER);

        const title = await (driver.wait(until.elementLocated(By.xpath("//p[@class='list-view-title h4']")), 5000)).getText();

        if(title ==='Purchase Order Management'){
            (await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Add')]")), 5000)).click();
            // (await driver.findElement(By.xpath("//button[contains(text(), 'Add')]"))).click();
            await (driver.wait(until.elementLocated(By.xpath("//*[@class='modal-title']")), 5000)).getText();
            await driver.findElement(By.xpath("//input[@formcontrolname='name']")).sendKeys('PO1');
            await driver.findElement(By.xpath("//input[@formcontrolname='description']")).sendKeys('PO1');

            (await driver.findElement(By.xpath("//ng-select[@formcontrolname='vendor']"))).click();
            const options = (await driver.wait(until.elementsLocated(By.xpath("//div[@class='ng-option']")), 500));
            options[0].click();
            await driver.sleep(1000);
            const a = await (await driver.findElement(By.xpath("//div[@class='datatable']/*//button"))).click();
        }

        await driver.sleep(5000);


    }
    finally{
        driver.quit();
    }
})();
