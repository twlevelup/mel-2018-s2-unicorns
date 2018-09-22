require('../../styles/pages/home.scss');
const moment = require("moment");
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require("../../templates/homePage.hbs");

class HomePage extends BasePage {

  template() {
    const context = {
      date: moment().format("LL"),
      time: moment().format('HH:mm:ss')
  
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate('breakfast');
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
