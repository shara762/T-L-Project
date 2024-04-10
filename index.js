var app=angular.module("myapp",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){

$routeProvider
.when("/home",{
    templateUrl:"home.html"
}).
when("/medium",{
    templateUrl:"medium.html",
    controller:'MyCtrl'
}).
when("/location",{
    templateUrl:"location.html"
}).
when("/rating",{
    templateUrl:"rating.html",
    controller:'rctrl'
}).
otherwise({redirectTo:"index.html"
});

}]);


app.controller("MyCtrl",function MyCtrl($scope) {

	$scope.output = "0";

	$scope.inOperation = false;

	$scope.num1 = 0;

	$scope.updateOutput = function(btn) {
		if($scope.newNumber){
			$scope.output = 0;	
		}
		if($scope.output == "0" || $scope.newNumber) {
			$scope.output = btn;
			$scope.newNumber = false;
		} else {
			$scope.output += String(btn);
		}
	};

	$scope.operate = function(op) {
		if($scope.output && !$scope.inOperation){
			$scope.num1 = $scope.output;
			$scope.output += op;
			$scope.inOperation = true;
		}else if($scope.output.length > $scope.num1.length+1){
			$scope.output = eval($scope.output);
			$scope.output += op;
		} 
	};

	$scope.equal = function() {
		if($scope.output.length > $scope.num1.length+1){
			$scope.output = eval($scope.output);
      $scope.num1 = $scope.output;
		}else{
			$scope.output = $scope.num1;
		}
	};
	
});



