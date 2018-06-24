
require('core-js');
require('zone.js');

var ngCore = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');
var ngplatformBrowserDynamic = require('@angular/platform-browser-dynamic');
require('./app/app.module.js');
/*
export const environment = {
    production: false
};*/

ngCore.enableProdMode();

var providers = [];

(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ngplatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(app.AppModule, { providers: providers });
    });
})(window.app || (window.app = {}));