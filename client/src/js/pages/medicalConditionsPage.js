const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/personalInfoPage.hbs')
class MedicalConditionsPage extends BasePage {
  template() {
    const medicalConditions = {
      title: 'Medical Conditions',
      attributes: {'Condition': 'Dementia'}
    };
    return compiledTemplate(medicalConditions);
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('breakfast');
  }

  topButtonEvent() {
    this.navigate('personal-info');
  }

  bottomButtonEvent() {
    this.navigate('medications');
  }
}

module.exports = MedicalConditionsPage;
