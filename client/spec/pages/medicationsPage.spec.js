const MedicationsPage = require('../../src/js/pages/medicationsPage');

describe('MedicationsPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new MedicationsPage();
      expect(page.template()).toContain("<h1>");
    });

    it('should have a title Medications', () => {
      const page = new MedicationsPage();
      expect(page.template()).toContain("<h1>Medications</h1>");
    });

    it('should have a name', () => {
      const page = new MedicationsPage();
      expect(page.template()).toContain("<h3>Name");
    });

    it('should have a type', () => {
      const page = new MedicationsPage();
      expect(page.template()).toContain("<h3>Type");
    });

    it('should have a dosage', () => {
      const page = new MedicationsPage();
      expect(page.template()).toContain("<h3>Dosage");
    });

    it('should have a frequency', () => {
      const page = new MedicationsPage();
      expect(page.template()).toContain("<h3>Frequency");
    });


  describe('#topButtonEvent', () => {
    it('goes to medical conditions page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MedicationsPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('medical-conditions');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to home', () => {
      const props = {
        navigate: () => { },
      };
      const page = new MedicationsPage(props);
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
      const page = new MedicationsPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('breakfast');
    });
  });

  });

});
