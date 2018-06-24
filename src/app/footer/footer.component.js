var ngCore = require('@angular/core');

(function (app) {

    app.FooterComponent = function () {
        this.date = new Date();
    };

    app.FooterComponent.annotations = [
        new ngCore.Component({
            selector: 'app-footer',
            template: require('./footer.component.html')
        })
    ];
})(window.app || (window.app = {}));