var app=angular.module("myapp",[]);
app.service("mservice",function(){
    this.square=function(x)
    {
        return parseInt(x)*parseInt(x);
    }
    this.cube=function(x)
    {
        return parseInt(x)*parseInt(x)*parseInt(x);
    }
    
});
app.controller("myctrl",function($scope,mservice)
{
    $scope.x=2;
    $scope.result=0;
    $scope.calsquare=function(){
        $scope.result=mservice.square($scope.x);
    }
    $scope.calcube=function(){
        $scope.result=mservice.cube($scope.x);
    }
    
});