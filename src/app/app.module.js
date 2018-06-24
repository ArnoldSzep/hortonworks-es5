var ngCore = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');

require('./app.component.js');
require('./footer/footer.component.js');
require('./header/header.component.js');
require('./search/search.component.js');
require('./issues/issues.component.js');
require('./repo/repo.component.js');
require('./home/home.component.js');

require('./app-routing.module.js');


(function (app) {
  app.AppModule = function AppModule() { }

  app.AppModule.annotations = [
    new ngCore.NgModule({
      declarations: [
        app.AppComponent,
        app.HomeComponent,
        app.SearchComponent,
        app.RepoComponent,
        app.IssuesComponent,
        app.HeaderComponent,
        app.FooterComponent
      ],
      imports: [
        ngPlatformBrowser.BrowserModule,
        app.AppRoutes
      ],
      bootstrap: [app.AppComponent]
    })
  ]
})(window.app || (window.app = {}));
