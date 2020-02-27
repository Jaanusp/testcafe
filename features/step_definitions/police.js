const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const PolicePage = require('../support/pages/police-page');
const {RequestLogger} = require('testcafe');
const { ClientFunction } = require('testcafe');



Given(/^I open the police page$/, async function() {
    await testController.navigateTo(PolicePage.Police.url());
});

When(/^I click on services icon$/, async function() {
    await testController.click(PolicePage.Police.servicesIcon());
});

Then('I am redirected to a subpage', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('teenindused'); //Checks if the current page URL contains the 'thank-you' string
});

When('I click on Tartu service', async function () {
    await testController.click(PolicePage.Police.tartuService());
    await this.addScreenshotToReport();
});

Then('I see the Tartu service title', async function () {
    await testController.expect(PolicePage.Police.tartuServiceTitle().innerText).contains('2019');
    await this.addScreenshotToReport();
});

 When('I click on footericon {string}', async function (String) {   
    await testController.expect(PolicePage.Police.footerIcon().innerText).contains(String);
    await this.addScreenshotToReport();
 });

Then('I am redirected to a booking subpage', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('teenindused'); //Checks if the current page URL contains the 'thank-you' string
    await testController.expect(PolicePage.Police.ServiceTitleHeading().innerText).contains('Politsei iseteenindus');
});


 When('I click on policework subpage {string}', async function (name) {   
    await testController.click(PolicePage.Police.menuItemPoliceWork());
    await testController.click(PolicePage.Police.subMenuItemLostItems(), name);
 });

 When('I click on Asutus menu item', async function () {  
       await testController.click(PolicePage.Police.asutusmenu());
       await testController.click(PolicePage.Police.asutusmenu0());     
       await testController.click(PolicePage.Police.asutusmenu1());
       await testController.expect(PolicePage.Police.asutusedTitleHeading().innerText).contains('Politsei- ja Piirivalveamet');
       await testController.click(PolicePage.Police.asutusmenuStrateegia());
       await testController.click(PolicePage.Police.asutusmenuJuhtkond());
       await testController.click(PolicePage.Police.asutusmenuSumboolika());
       await testController.click(PolicePage.Police.asutusmenuInMemoriam());
       await testController.click(PolicePage.Police.asutusmenuRahvusvaheline());
       await testController.click(PolicePage.Police.asutusmenuPalgaandmed());
       await testController.click(PolicePage.Police.asutusmenuMeediasuhtlus());
       await testController.click(PolicePage.Police.asutusmenuAjakiri());
       await testController.click(PolicePage.Police.asutusmenuOrkester());
       await testController.click(PolicePage.Police.asutusmenuSeotud());
       await testController.click(PolicePage.Police.asutusmenuAjalugu());
 });     
When('I click on Dokumendid ja load menu item', async function () {
       await testController.click(PolicePage.Police.Dokumendidmenu()); 
       //await testController.click(PolicePage.Police.Dokumendidmenu0());
       await testController.click(PolicePage.Police.Dokumendidmenu1());
       await testController.expect(PolicePage.Police.asutusedTitleHeading().innerText).contains('Isikut tõendavad dokumendid');
       await testController.click(PolicePage.Police.DokumendidIDkaartT()).wait(8000);
       await testController.click(PolicePage.Police.DokumendidIDkaartL()).wait(8000);
       await testController.click(PolicePage.Police.DokumendidPassT()).wait(8000);
       await testController.click(PolicePage.Police.DokumendidPassL()).wait(8000);
});  