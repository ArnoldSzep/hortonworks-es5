var ngCore = require('@angular/core');
require('src/app/data.service.js');

(function (app) {

    app.SearchComponent = function (dataService) {
        this.query;
        this.searchResults;
        this.searchLoading = false;
        this.searchHide = true;
        this.searchCount;
        this.searchError = '';

        this.search = function (query) {
            this.searchHide = true;
            this.searchLoading = true;
            this.searchError = '';

            dataService.searchRepo(query, this, function (data, that, error) {
                that.searchError = '';
                that.searchLoading = false;
                that.searchHide = false;

                if (!error && data && data.total_count > 0) {
                    for (var p in data) {
                        if (data.hasOwnProperty(p)) {
                            that.searchResults = data.items
                        }
                    }
                } else {
                    that.searchError = 'Wroooong!';
                    that.searchHide = true;
                    that.searchLoading = false;
                }
            });
        }

        this.clearSearch = function () {
            this.searchHide = true;
            this.searchError = ''
            this.searchLoading = false;
        }
    };

    app.SearchComponent.annotations = [
        new ngCore.Component({
            selector: 'app-search',
            template: require('./search.component.html'),
            providers: [app.DataService]
        })
    ];

    app.SearchComponent.parameters = [
        [new ngCore.Inject(app.DataService)]
    ];

})(window.app || (window.app = {}));