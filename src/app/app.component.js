var ngCore = require('@angular/core');

(function (app) {
  app.AppComponent = function () {

  };

  app.AppComponent.annotations = [
    new ngCore.Component({
      selector: 'app-root',
      template: require('./app.component.html'),
      //directives: [app.HelloWorldComponent]
    })
  ];
})(window.app || (window.app = {}));
