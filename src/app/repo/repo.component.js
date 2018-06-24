var ngCore = require('@angular/core');
var d3 = require('d3');

(function (app) {
    app.RepoComponent = function (dataService) {
        this.repoData = [];
        this.repoError;
        this.urlParams = app.getQueryParams(window.location.href);

        dataService.getRepo(this.urlParams.user, this.urlParams.name, this, function (data, that, error) {
            if (!error && data) {
                that.repoData.push(data);
            } else {
                that.repoError = 'NO GOD! PLEASE NO!!! NOOOOOOOOOO';
            }
        });

        // Charts
        this.chart = function () {
            document.getElementById('chart_svg').innerHTML = ''; // Reset chart
            this.chartIsLive = true;


            // D3 stuff
            var dataset = [
                this.repoData[0].stargazers_count,
                this.repoData[0].forks_count,
                this.repoData[0].subscribers_count,
                this.repoData[0].open_issues_count,
                this.repoData[0].size],
                frameW = 500,
                frameH = 300,
                barPadding = 5,
                barW = (frameW / dataset.length);

            var frame = d3.select('svg#chart_svg')
                .attr('width', frameW)
                .attr('height', frameH);

            var yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, frameH - 20]);

            var barChart = frame.selectAll('rect')
                .data(dataset)
                .enter()
                .append('rect')
                .attr('y', function (d) {
                    return frameH - yScale(d);
                })
                .attr('height', function (d) {
                    return yScale(d);
                })
                .attr('width', barW - barPadding)
                .attr('transform', function (d, i) {
                    let translate = [barW * i, 0]
                    return 'translate(' + translate + ')';
                })
                .attr('fill', '#012a46');

            var text = frame.selectAll('text')
                .data(dataset)
                .enter()
                .append('text')
                .text(function (d) {
                    return d;
                })
                .attr('y', function (d, i) {
                    return frameH - yScale(d) - 2;
                })
                .attr('x', function (d, i) {
                    return barW * i;
                })
                .attr('fill', '#012a46');
        }
    };

    app.RepoComponent.annotations = [
        new ngCore.Component({
            selector: 'app-repo',
            template: require('./repo.component.html'),
            providers: [app.DataService]
        })
    ];

    app.RepoComponent.parameters = [
        [new ngCore.Inject(app.DataService)]
    ];

})(window.app || (window.app = {}));