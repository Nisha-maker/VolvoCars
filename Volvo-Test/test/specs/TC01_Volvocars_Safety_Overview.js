import HomePage from '../../pageObjects/homePage.js';
import data from '../../data/testData.json' assert { type: 'json'}


describe('Test Volvocars Safety_Overview',() =>{

it('Navigate to the page and validate title',async ()=>{

    var title = await browser.getTitle();
    console.log(title);
    await expect(title == data.title).toBeTruthy();
    
});

it('validate main heading & sub heading', async ()=>{

    const main = await HomePage.heading1.getText();
    console.log(main);
    await expect(main).toEqual(data.heading1);
    

    const subhead = await HomePage.heading2.getText();
    console.log(subhead);
    await expect(subhead).toEqual(data.heading2);
    

});

it('To verify Hero image & introduction', async() => {

    const intropara1 = await HomePage.volvopara1;
    await expect(intropara1).toBeDisplayed();
    console.log(await intropara1.getText());

    const heroimage1 = await HomePage.heroimg1;
    await heroimage1.scrollIntoView();
    await heroimage1.waitForDisplayed({ timeout: 5000 });

    const intropara2 = await HomePage.volvopara2;
    await expect(intropara2).toBeDisplayed();
    console.log(await intropara2.getText());


    });

it('To verify Slider Icons', async() => {

    const slidertitle1= await HomePage.slidericon1;
    await slidertitle1.scrollIntoView();
    await expect(slidertitle1).toBeEnabled();
    console.log(await slidertitle1.getText());
       
    const slider1= await HomePage.slidercard1;
    await expect(slider1).toBeDisplayed();
    await HomePage.springcarouselright.click();
       
    const slider2= await HomePage.slidercard2;
    await slider2.waitForDisplayed({ timeout: 5000 });
    const slidertitle2= await HomePage.slidericon2;
    await expect(slidertitle2).toBeEnabled();
    console.log(await slidertitle2.getText());
       
    await HomePage.springcarouselright.click();
    const slider3= await HomePage.slidercard3;
    await slider3.waitForDisplayed({ timeout: 5000 });
    const slidertitle3= await HomePage.slidericon3;
    await expect(slidertitle3).toBeEnabled();
    console.log(await slidertitle3.getText());

    await HomePage.springcarouselleft.click();
    browser.pause(5000);
    
    await HomePage.springcarouselleft.click();
    browser.pause(5000); 

});


});




