'use strict';

describe('myApp.myTimer module', function() {

  beforeEach(module('myApp.myTimer'));

  describe('myTimer controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var myTimerCtrl = $controller('myTimerCtrl');
      expect(myTimerCtrl).toBeDefined();
    }));

  });
});