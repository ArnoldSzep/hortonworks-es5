var ngCore = require('@angular/core');

(function (app) {

    app.HeaderComponent = function () {
    };

    app.HeaderComponent.annotations = [
        new ngCore.Component({
            selector: 'app-header',
            template: require('./header.component.html')
        })
    ];
})(window.app || (window.app = {}));