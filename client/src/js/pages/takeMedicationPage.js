
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/taskPage.hbs')
class TakeMedicationPage extends BasePage {
  template() {
    const medicationTask = {
      title: 'To Do List',
      attributes : { 'Task': 'Take medication', 'Time': '15:00'}
    };
    return compiledTemplate(medicationTask);
  }

  leftButtonEvent() {
    this.navigate('personal-info');
  }

  rightButtonEvent() {
    this.navigate('/');
  }

  bottomButtonEvent() {
    this.navigate('breakfast');
  }

  topButtonEvent() {
    this.navigate('breakfast');
  }
}

module.exports = TakeMedicationPage;
