const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/medicationsPage.hbs')
class MedicationsPage extends BasePage {
  template() {
    const medications = {
      title: 'Medications',
      attributes: ['Name: TakeMe', 'Type: Strong', 'Dosage: 2mg', 'Frequency: Twice daily']
    };
    return compiledTemplate(medications);
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('/');
  }

  topButtonEvent() {
    this.navigate('medical-conditions');
  }
}

module.exports = MedicationsPage;
