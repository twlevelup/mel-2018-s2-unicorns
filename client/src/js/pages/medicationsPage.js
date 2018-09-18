const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/medicationsPage.hbs')
class MedicationsPage extends BasePage {
  template() {
    const medications = {
      title: 'Medications',
      //attributes : ['Name: Promazine', 'Type: Antipsychotic', 'Dosage: 25mg', 'Frequency: Twice daily']
      attributes : { 'Name': 'Prozamine', 'Type': 'Antipsychotic', 'Dosage': '25mg', 'Frequency': 'Twice daily' }
      //attributes : [{ title: 'Name', value: 'Prozamine' }, { title: 'Type', value: 'Antipsychotic' }]
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
