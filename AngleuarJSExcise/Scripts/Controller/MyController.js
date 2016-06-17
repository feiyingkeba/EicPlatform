(function () {
    angular.module('myApp', [])
       .controller("MainController", function ($scope) {
           var model = {
               Name: "My Books",
               Books: [
                   { Title: '阳光踩烂的日子', isComplete: false },
                   { Title: '那些年', isComplete: false },
                   { Title: '时间是用来浪费的', isComplete: true }
               ],
               isCanAdd: true
           };
           $scope.readingList = model;
       })
      .controller("StoreController", function ($scope,$http) {
          $http.get('/Home/GetProducts').success(function (data) {
              $scope.products = data;
          });
          
      })
     .controller("PanelController", function ($scope) {
         $scope.tab = 0;
         $scope.selectedTab = function (setTab) {
             $scope.tab = setTab;
         };
         $scope.isSelected = function (tab) {
             return $scope.tab === tab;
         };
     })
})();




