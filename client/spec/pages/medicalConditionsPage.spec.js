const MedicalConditionsPage = require('../../src/js/pages/medicalConditionsPage');

describe('MedicalConditionsPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new MedicalConditionsPage();
      expect(page.template()).toContain("<h1>");
    });

    it('should have a title Medical Conditions', () => {
      const page = new MedicalConditionsPage();
      expect(page.template()).toContain("<h1>Medical Conditions</h1>");
    });

  describe('#topButtonEvent', () => {
    it('goes to next', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MedicalConditionsPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('personal-info');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to next', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MedicalConditionsPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('medications');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to home', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MedicalConditionsPage(props);
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
      const page = new MedicalConditionsPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  });

});
