var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/pagetest', {
            templateUrl: 'templates/page-test.html',
            controller: 'testController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);