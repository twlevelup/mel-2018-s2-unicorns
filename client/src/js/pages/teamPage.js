const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/teamPage.hbs')
class TeamPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }
}

module.exports = TeamPage;
