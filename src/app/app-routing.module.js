var ngRouter = require('@angular/router');
require('./home/home.component.js');
require('./repo/repo.component.js');
require('./issues/issues.component.js');

(function (app) {
    app.AppRoutes = new ngRouter.RouterModule.forRoot([
        {
            path: '',
            component: app.HomeComponent
        },
        {
            path: 'repo',
            component: app.RepoComponent
        },
        {
            path: 'issues',
            component: app.IssuesComponent
        }
    ]);
    
    // This one is for getting url parameters, courtesy of stackoverlow
    app.getQueryParams = function(qs) {
        if (qs) {
            qs = qs.substring(qs.indexOf("?") + 1);
            qs = qs.split('+').join(' ');
    
            var params = {},
                tokens,
                re = /[?&]?([^=]+)=([^&]*)/g;
    
            while (tokens = re.exec(qs)) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
            }
    
            return params;
        } else {
            return '';
        }
    }
})(window.app || (window.app = {}));