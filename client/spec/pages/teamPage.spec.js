const TeamPage = require('../../src/js/pages/teamPage');

describe('TeamPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new TeamPage();
      expect(page.template()).toContain("<h1>Made by:</h1>");
    });

    it('should contain team members names', () => {
      const page = new TeamPage();
      expect(page.template()).toContain("Priyam");
      expect(page.template()).toContain("Matt");
      expect(page.template()).toContain("Kaia");
      expect(page.template()).toContain("Mariane");
        expect(page.template()).toContain("Liam");

    });
  });

});
