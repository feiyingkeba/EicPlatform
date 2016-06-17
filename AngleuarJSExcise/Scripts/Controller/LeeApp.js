(function(){
    angular.module('LeeApp', ['ngRoute'])
      .config(['$routeProvider', function ($routeProvider) {
           $routeProvider.when('/One', {
               templateUrl:'Home/One'
           }).when('/Two', {
               templateUrl:'Home/Two'
           })
       }])
      .directive('butterbar', ['$rootScope', function ($rootScope) {
          return {
              link: function (scope, element, attrs) {
                  element.addClass('hide');

                  $rootScope.$on('$routeChangeStart', function () {
                      element.removeClass('hide');
                  });
              }
          };
       }])
      .controller("LoadPageController",function ($scope) {
           $scope.name = "杨垒";
       })

      .controller("StoreController", function ($scope, $http) {
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
})()

  