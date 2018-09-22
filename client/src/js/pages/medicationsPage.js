const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/medicationsPage.hbs')
class MedicationsPage extends BasePage {
  template() {
    const medications = {
      title: 'Medications',
      attributes : { 'Name': 'Prozamine', 'Type': 'Antipsychotic', 'Dosage': '25mg', 'Frequency': 'Twice daily' }
    };
    return compiledTemplate(medications);
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('breakfast');
  }

  topButtonEvent() {
    this.navigate('medical-conditions');
  }
}

module.exports = MedicationsPage;
