require('../../styles/pages/home.scss');
const moment = require("moment");
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require("../../templates/homePage.hbs");

class HomePage extends BasePage {

  template() {
    const context = {
      time: moment().format('LTS')
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate('personal-info');
  }

  rightButtonEvent() {
    this.navigate('personal-info');
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
