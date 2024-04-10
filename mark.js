var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
    $scope.student={
        firstname:"sharifa",
        lastname:"shaikh",
        subject:[
            {name:'data structure',marks:90},
            {name:'block chain',marks:90},
            {name:'angularjs',marks:90},  
        ],
        tot:600,
        fullname:function(){
            var studentObject;
            studentObject=
            $scope.student;
            return studentObject.firstname+""+
            studentObject.lastname;

        }
    };
});
