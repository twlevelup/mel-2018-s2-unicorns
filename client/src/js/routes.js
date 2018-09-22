const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const PersonalInfoPage = require('./pages/personalInfoPage');
const MedicalConditionsPage = require('./pages/medicalConditionsPage');
const MedicationsPage = require('./pages/medicationsPage');
const BreakfastPage = require('./pages/breakfastPage');
const TakeMedicationPage = require('./pages/takeMedicationPage')

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'personal-info': PersonalInfoPage,
  'medical-conditions': MedicalConditionsPage,
  'medications': MedicationsPage,
  'breakfast': BreakfastPage,
  'takeMedication': TakeMedicationPage,
};
