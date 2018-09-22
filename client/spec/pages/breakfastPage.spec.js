const BreakfastPage = require('../../src/js/pages/breakfastPage');

describe('BreakfastPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new BreakfastPage();
      expect(page.template()).toContain("<h1>");
    });

    it('should have a to do list title', () => {
      const page = new BreakfastPage();
      expect(page.template()).toContain("<h1>To Do List</h1>");
    });

//    it('should have a time', () => {
//      const page = new BreakfastPage();
//      expect(page.template()).toContain("<h2>by 10:00A.M.</h2>");
//    });


  describe('#topButtonEvent', () => {
    it('goes to take medication', () => {
      const props = {
        navigate: () => { },
      };
      const page = new BreakfastPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('takeMedication');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to personal info', () => {
      const props = {
        navigate: () => { },
      };
      const page = new BreakfastPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('personal-info');
    });
  });

    describe('#bottomButtonEvent', () => {
      it('goes to take medication', () => {
        const props = {
          navigate: () => { },
        };
        const page = new BreakfastPage(props);
        spyOn(page, 'navigate');

        page.bottomButtonEvent();
        expect(page.navigate).toHaveBeenCalledWith('takeMedication');
      });
    });

  describe('#rightButtonEvent', () => {
    it('goes to home', () => {
      const props = {
        navigate: () => { },
      };
      const page = new BreakfastPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  });

});
