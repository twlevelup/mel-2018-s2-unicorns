const TakeMedicationPage = require('../../src/js/pages/takeMedicationPage');

describe('TakeMedicationPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new TakeMedicationPage();
      expect(page.template()).toContain("<h1>");
    });

    it('should have a task', () => {
      const page = new TakeMedicationPage();
      expect(page.template()).toContain("<h1>Take medication</h1>");
    });

    it('should have a time', () => {
      const page = new TakeMedicationPage();
      expect(page.template()).toContain("<h2>by 3:00P.M.</h2>");
    });



  describe('#bottomButtonEvent', () => {
    it('goes to breakfast', () => {
      const props = {
        navigate: () => { },
      };
      const page = new TakeMedicationPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('breakfast');
    });
  });

    describe('#topButtonEvent', () => {
      it('goes to breakfast', () => {
        const props = {
          navigate: () => { },
        };
        const page = new TakeMedicationPage(props);
        spyOn(page, 'navigate');

        page.topButtonEvent();
        expect(page.navigate).toHaveBeenCalledWith('breakfast');
      });
    });

  describe('#leftButtonEvent', () => {
    it('goes to personalInfo', () => {
      const props = {
        navigate: () => { },
      };
      const page = new TakeMedicationPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('personal-info');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to home', () => {
      const props = {
        navigate: () => { },
      };
      const page = new TakeMedicationPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  });

});
