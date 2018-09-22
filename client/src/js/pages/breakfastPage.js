const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/taskPage.hbs')
class BreakfastPage extends BasePage {
  template() {
    const breakfastTask = {
     title: 'To Do List',
     attributes : { 'Task': 'Eat breakfast', 'Time': '10:00'}
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
