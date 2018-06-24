

(function (app) {
  app.DataService = function DataService() {
    this.callThatApi = function (url, that, doStuff) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function () {
        var error;

        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
        } else {
          error = request.status;
        }

        // One callback isn't hell right...? RIGHT...?
        if (typeof doStuff == "function") {
          doStuff(data, that, error);
        }
      };

      request.send();
    }
  }

  app.DataService.prototype.searchRepo = function (q, that, doStuff) {
    this.callThatApi('https://api.github.com/search/repositories?q=' + q, that, doStuff);
  };

  app.DataService.prototype.getRepo = function (user, name, that, doStuff) {
    this.callThatApi('https://api.github.com/repos/' + user + '/' + name, that, doStuff);
  };

  app.DataService.prototype.getIssues = function (user, name, that, doStuff) {
    this.callThatApi('https://api.github.com/repos/' + user + '/' + name + '/issues', that, doStuff);
  };

})(window.app || (window.app = {}));