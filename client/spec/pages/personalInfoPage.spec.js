const PersonalInfoPage = require('../../src/js/pages/personalInfoPage');

describe('PersonalInfoPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new PersonalInfoPage();
      expect(page.template()).toContain("<h1>");
    });

    it('should have a title Personal Info', () => {
      const page = new PersonalInfoPage();
      expect(page.template()).toContain("<h1>Personal Info</h1>");
    });

    it('should have a name', () => {
      const page = new PersonalInfoPage();
      expect(page.template()).toContain("Name");
    });

    it('should have an age', () => {
      const page = new PersonalInfoPage();
      expect(page.template()).toContain("Age");
    });

    it('should have a medicare number', () => {
      const page = new PersonalInfoPage();
      expect(page.template()).toContain("Medicare Number");
    });

  describe('#bottomButtonEvent', () => {
    it('goes to next', () => {
      const props = {
        navigate: () => { },
      };
      const page = new PersonalInfoPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('medical-conditions');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to home', () => {
      const props = {
        navigate: () => { },
      };
      const page = new PersonalInfoPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to home', () => {
      const props = {
        navigate: () => { },
      };
      const page = new PersonalInfoPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('breakfast');
    });
  });

  });

});
