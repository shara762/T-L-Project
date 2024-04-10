var app = angular.module("app", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/doctor', 
        {templateUrl: 'doctor.html',
        controller:'myctrl'});
    
      $routeProvider.when('/emp', 
      {templateUrl: 'emp.html',
      controller:'ctrl'
    });
    $routeProvider.when('/hotel', 
      {templateUrl: 'hotel.html',
      controller:'hctrl'
    });
     
     
        $routeProvider.otherwise({redirectTo: '/index.html'});
    }]);
    app.controller("myctrl",function($scope){
 
      $scope.doctor=[
        { dno:1,name:'krushna',addr:'pune',cno:'7643558790'},
        { dno:2,name:'tejas',addr:'Mumbai',cno:'3421990574'},
        { dno:3,name:'meena',addr:'delhi',cno:'6754332890'},
        { dno:4,name:'geeta',addr:'pune',cno:'0947332892'},
        { dno:5,name:'sahil ',addr:'pune',cno:'7643221890'},
        { dno:6,name:'maryam',addr:'pune',cno:'6478332109'}

];
});
app.controller("ctrl",function($scope){
 
  $scope.emp=[
    { eno:11,name:'krushna',addr:'pune',sal:10000},
    { eno:12,name:'radha',addr:'mumbai',sal:20000},
    { eno:13,name:'mohan',addr:'pune',sal:30000},
    { eno:14,name:'sheena',addr:'karnataka',sal:40000},
    { eno:15,name:'mahima',addr:'nashik',sal:50000},
    { eno:16,name:'niraj',addr:'pune',sal:70000},
];

  
  });
  app.controller("hctrl",function($scope)
{
    $scope.hotel=[
                  { name:'krushna',addr:'pune',cno:'7643558790'},
                  { name:'taj hotel',addr:'Mumbai',cno:'3421990574'},
                  { name:'nisarg',addr:'delhi',cno:'6754332890'},
                  { name:'palangi',addr:'pune',cno:'0947332892'},
                  { name:'sahil hotel',addr:'pune',cno:'7643221890'},
                  { name:'raj hotel',addr:'pune',cno:'6478332109'}

];
}
);
  