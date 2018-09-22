const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/taskPage.hbs')
class BreakfastPage extends BasePage {
  template() {
    const breakfastTask = {
      task: 'Eat breakfast',
      time: '10:00A.M.'
    };
    return compiledTemplate(breakfastTask);
  }

  leftButtonEvent() {
    this.navigate('personal-info');
  }

  rightButtonEvent() {
    this.navigate('/');
  }

  topButtonEvent() {
    this.navigate('takeMedication');
  }

  bottomButtonEvent() {
    this.navigate('takeMedication');
  }
}

module.exports = BreakfastPage;
