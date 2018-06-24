var ngCore = require('@angular/core');

(function (app) {

    app.IssuesComponent = function (dataService) {
        this.issueError = '';
        this.issueData = [];

        this.urlParams = app.getQueryParams(window.location.href);
        this.repoName = this.urlParams.name;
        this.repoUser = this.urlParams.user;

        dataService.getIssues(this.urlParams.user, this.urlParams.name, this, function (data, that, error) {
            if(!error && data.length > 0){
                that.issueData = data;
            } else {
                that.issueError = 'No issues found, you shouldn\'t be here!';
            }
        });
    };

    app.IssuesComponent.annotations = [
        new ngCore.Component({
            selector: 'app-issues',
            template: require('./issues.component.html'),
            providers: [app.DataService]
        })
    ];

    app.IssuesComponent.parameters = [
        [new ngCore.Inject(app.DataService)]
    ];

})(window.app || (window.app = {}));