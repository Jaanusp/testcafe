const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.Police = {
    url: function() {
        return 'https://politsei.ee';
    },
    menuItemPoliceWork: function() {
        return Selector('.has-submenu').withText('Politseitöö').with({ boundTestRun: testController });  
    },
    subMenuItemLostPerson: function() {
        return Selector('#menu-level1-last > ul > li:nth-child(1) > a').with({ boundTestRun: testController }); 
    },
    servicesIcon: function() {
        return Selector('.action').nth(4).with({ boundTestRun: testController });
    },
    tartuService: function() {
        return Selector('#cell-2').with({ boundTestRun: testController }); 
    },
    tartuServiceTitle: function() {
        return Selector('.highlight.hours').with({boundTestRun: testController});
    },
    loginErrorMessage: function() {
        return Selector('#js-flash-container > div > div');
    },
    searchButton: function() {
        return Selector('#search');
    },
    firstSearchResult: function() {
        return Selector('.link').nth(0).with({boundTestRun: testController});
    },    
    submitButton: function() {
        return Selector('.listitem').child('h5').with({ boundTestRun: testController });
    },
    contactFormSubmit: function() {
        return Selector('.content').child('h1').with({ boundTestRun: testController });
    },
    menuItemContacts: function() {
        return Selector('.has-submenu').withText('Kontakt').with({ boundTestRun: testController });  
    },
    subMenuItemLostItems: function() {
        return Selector('#menu-level1-last > ul > li:nth-child(1) > a').with({ boundTestRun: testController }); 
    },
    subMenuItemLostPersons: function() {
        return Selector('#menu-level3').nth(1).with({ boundTestRun: testController }); 
    },
    
    searchInput: function() {
        return Selector('Search').withAttribute('type', 'input').with({ boundTestRun: testController }); 
    },
    searchByLetter: function() {
        return Selector('#maincontent > div > div > section > div > ul > li:nth-child(24)').with({boundTestRun: testController});
    },
    searchByLetterMenuItem: function() {
        return Selector('.contact-container > contact-ui-controls > control-buttons > li:nth-child(1)').with({ boundTestRun: testController });
    },    
    footerIcon: function() {
        return Selector('.action').nth(2).with({ boundTestRun: testController });
    },   
    ServiceTitleHeading: function() {
        return Selector('.content').child('h1').with({ boundTestRun: testController });
    }, 
  
  asutusmenu: function() {
        return Selector('#desktop-menu > li:nth-child(1) > a').with({ boundTestRun: testController });
    }, 
  asutusmenu0: function() {
        return Selector('#desktop-menu > li.has-submenu.is-open > ul > li.has-submenu.is-open > a ').with({ boundTestRun: testController });
    }, 
      asutusmenu1: function() {
        return Selector('#desktop-menu > li.has-submenu.is-open > ul > li.has-submenu.is-open > ul > li:nth-child(1) > a').with({ boundTestRun: testController });
    }, 
asutusedTitleHeading: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > h2').with({ boundTestRun: testController });
    }, 
      asutusmenuLugu: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li.active > a').with({ boundTestRun: testController });
    },
      asutusmenuStrateegia: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(2) > a').with({ boundTestRun: testController });
    },
      asutusmenuJuhtkond: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(3) > a').with({ boundTestRun: testController });
    },
      asutusmenuSumboolika: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(4) > a').with({ boundTestRun: testController });
   },
      asutusmenuInMemoriam: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(6) > a').with({ boundTestRun: testController });
   },   
      asutusmenuRahvusvaheline: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(7) > a').with({ boundTestRun: testController });
   },   
      asutusmenuPalgaandmed: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(8) > a').with({ boundTestRun: testController });
   },   
      asutusmenuMeediasuhtlus: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(9) > a').with({ boundTestRun: testController });
   },   
      asutusmenuAjakiri: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(10) > a').with({ boundTestRun: testController });
   },   
      asutusmenuOrkester: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(11) > a').with({ boundTestRun: testController });
   },   
      asutusmenuSeotud: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(12) > a').with({ boundTestRun: testController });
   },   
      asutusmenuAjalugu: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(5) > a').with({ boundTestRun: testController });
   },   
      Dokumendidmenu: function() {
        return Selector('#desktop-menu > li:nth-child(2) > a').with({ boundTestRun: testController });
    }, 
      Dokumendidmenu0: function() {
        return Selector('#desktop-menu > li.has-submenu > ul > li.has-submenu.is-open > a ').with({ boundTestRun: testController });
    },
      Dokumendidmenu1: function() { 
        return Selector('#desktop-menu > li.has-submenu.is-open > ul > li.has-submenu.is-open > ul > li:nth-child(1)').with({ boundTestRun: testController });
    },
    DokumendidTitleHeading: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > h2').with({ boundTestRun: testController });
    },
    DokumendidIDkaartT: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li.active > a').with({ boundTestRun: testController });
    },
    DokumendidIDkaartL: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(2) > a').with({ boundTestRun: testController });
    },
    DokumendidPassT: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(3) > a').with({ boundTestRun: testController });
    },
    DokumendidPassL: function() {
        return Selector('#maincontent > div > div.sidebar.links-secondary > div > ul > li:nth-child(4) > a').with({ boundTestRun: testController });
    }
};