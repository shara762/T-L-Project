var app = angular.module("app", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', 
        {templateUrl: 'home.html'});
        $routeProvider.when('/about', 
          {templateUrl: 'about.html', controller: 'mainCtrl'});
        $routeProvider.otherwise({redirectTo: '/index.html'});
    }]);
    app.controller("my",function($scope){
 
      $scope.name="jaikranti college"
  
  });
