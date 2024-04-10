var app = angular.module("app", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tprofile', 
        {templateUrl: 'tprofile.html',
     });
     
        $routeProvider.otherwise({redirectTo: '/index.html'});
    }]);
    app.controller("my",function($scope){
 
      $scope.name="jaikranti college"
  
  });
  