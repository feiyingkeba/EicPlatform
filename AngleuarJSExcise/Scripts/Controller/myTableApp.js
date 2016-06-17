angular.module('myTableApp', ['ngTable'])
.controller('tableBaseController', function ($scope, NgTableParams) {
   
    var data = [
        { name: 'yanglei', age: 32 },
        { name: 'wenming', age: 26 },
    ];
   
    $scope.title = 'table基础练习';
    
  

    $scope.tbldata = data;
});