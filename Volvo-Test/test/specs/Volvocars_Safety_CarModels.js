import HomePage from '../../pageObjects/homePage.js';

describe('Test Volvocars Safety_CarModels',() =>{


it('To verify recharge models', async() => {

    const elerecharge= await HomePage.productlisttitle;
    await elerecharge.scrollIntoView();
    await expect(elerecharge).toBeDisplayed();
    await expect(elerecharge).toHaveText('All recharge models');
    console.log(await elerecharge.getText());

    const carmodel= await HomePage.productlistitem;
    await expect(carmodel).toBeDisplayed();
    console.log(await carmodel.getText());

    const learnlink= await HomePage.productlistlink1;
    await expect(learnlink).toBeClickable();
    console.log(await learnlink.getText());

    const configurelink= await HomePage.productlistlink2;
    await expect(configurelink).toBeClickable();
    console.log(await configurelink.getText());

    await HomePage.springcarouselnext.click();
    browser.pause(5000);

    await HomePage.springcarouselprev.click();
    browser.pause(5000);


});



});

