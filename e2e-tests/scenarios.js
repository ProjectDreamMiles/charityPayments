'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /topay when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/topay");
  });


  describe('topay', function() {

    beforeEach(function() {
      browser.get('index.html#!/topay');
    });


    it('should render topay when user navigates to /topay', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('paymenthistory', function() {

    beforeEach(function() {
      browser.get('index.html#!/paymenthistory');
    });


    it('should render paymenthistory when user navigates to /paymenthistory', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
