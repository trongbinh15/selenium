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
            (await driver.wait(until.elementLocated(By.xpath("//app-list-view/div[3]/div[1]/button")), 5000)).click();
            driver.sleep(1000);
            await (driver.wait(until.elementLocated(By.xpath("//*[@class='modal-title']")), 5000)).getText();

            await driver.findElement(By.xpath("//input[@formcontrolname='name']")).sendKeys('PO1');
            await driver.findElement(By.xpath("//input[@formcontrolname='description']")).sendKeys('PO1');

            (await driver.findElement(By.xpath("//ng-select[@formcontrolname='vendor']"))).click();
            const options = (await driver.wait(until.elementsLocated(By.xpath("//div[@class='ng-option']")), 500));
            options[0].click();
            await driver.sleep(1000);
            const addButton =  await driver.findElement(By.xpath("//div[@class='modal-content']/div[2]/div/div[1]/div[1]/button"));

            addButton.click();
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//table/tbody/tr[2]//th[1]/div/ng-select/div/div/div[2]/input")).sendKeys('GM10320001906EE1');
            await (await driver.findElement(By.xpath("//table/tbody/tr[2]/th[3]/div"))).click();
            await driver.sleep(1000);
            await (await driver.findElement(By.xpath("//table/tbody/tr[2]/*//ng-dropdown-panel/div/div[2]/div[1]"))).click();
            await driver.findElement(By.xpath("//table/tbody/tr[2]//th[4]/div/input")).sendKeys('10');
            await driver.findElement(By.xpath("//table/tbody/tr[2]//th[5]/div/input")).sendKeys('10');
            (await driver.findElement(By.xpath("//app-summary/div"))).click();

            await driver.sleep(1000);

            addButton.click();
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//table/tbody/tr[3]//th[1]/div/ng-select/div/div/div[2]/input")).sendKeys('GM10320001906EE1');
            await driver.findElement(By.xpath("//table/tbody/tr[3]//th[4]/div/input")).sendKeys('10');
            await driver.findElement(By.xpath("//table/tbody/tr[3]//th[5]/div/input")).sendKeys('10');
            await (await driver.findElement(By.xpath("//table/tbody/tr[3]/th[3]/div"))).click();
            await driver.sleep(1000);
            await (await driver.findElement(By.xpath("//table/tbody/tr[3]/*//ng-dropdown-panel/div/div[2]/div[1]/span"))).click();
            await driver.sleep(1000);
            (await driver.findElement(By.xpath("//app-summary/div"))).click();
        }

        await driver.sleep(10000);


    }
    finally{
        driver.quit();
    }
})();
