'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /restaurantList when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/restaurantList");
  });


  describe('restaurantList', function() {

    beforeEach(function() {
      browser.get('index.html#/restaurantList');
    });


    it('should render restaurantList when user navigates to /restaurantList', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('timer', function() {

    beforeEach(function() {
      browser.get('index.html#/timer');
    });


    it('should render timer when user navigates to /timer', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });


  describe('restaurantAdd', function() {

    beforeEach(function() {
      browser.get('index.html#/restaurantAdd');
    });


    it('should render restaurantAdd when user navigates to /restaurantAdd', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 3/);
    });

  });
});
