var app=angular.module("app",["ngRoute"]);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/dm',
    {
        templateUrl:"dm.html",
        controller:"dmctrl"
    });
        $routeProvider.otherwise({redirecTo:'/index.html'});
    }]);
    app.controller("dmctrl",function($scope){
        $scope.msg=[
            {
                name:'radha',rno:1,add:'pune'}
        ];
            });
        


    