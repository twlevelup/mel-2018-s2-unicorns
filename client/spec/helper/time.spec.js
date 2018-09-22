const moment = require("moment");
const HomePage = require('../../src/js/pages/homePage');


  describe('clock', () => {
      beforeAll(() => {
          Date.now = jest.fn(() => 1487076708000);
      });

      it('should have a time', () => {
          const page = new HomePage();
          expect(page.template()).toContain("23:51:48");
      });
  });  

  describe('date', () => {
      beforeAll(() => {
          Date.now = jest.fn(() => 1487076708000);
      });

      it('should have a date', () => {
          const page = new HomePage();
          expect(page.template()).toContain("February 14, 2017");
      });
  });
