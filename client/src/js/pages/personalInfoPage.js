const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/personalInfoPage.hbs')
class PersonalInfoPage extends BasePage {
  template() {
    const personalInfo = {
      title: 'Personal Info',
      attributes: {'Name': 'John Doe', 'Age': 80, 'Medicare Number': 1273847}
    };
    return compiledTemplate(personalInfo);
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('breakfast');
  }

  bottomButtonEvent() {
    this.navigate('medical-conditions');
  }
}

module.exports = PersonalInfoPage;
